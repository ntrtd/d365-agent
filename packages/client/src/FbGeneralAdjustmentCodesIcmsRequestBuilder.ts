/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { FbGeneralAdjustmentCodesIcms } from './FbGeneralAdjustmentCodesIcms';

/**
 * Request builder class for operations supported on the {@link FbGeneralAdjustmentCodesIcms} entity.
 */
export class FbGeneralAdjustmentCodesIcmsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FbGeneralAdjustmentCodesIcms<T>, T> {
  /**
   * Returns a request builder for querying all `FbGeneralAdjustmentCodesIcms` entities.
   * @returns A request builder for creating requests to retrieve all `FbGeneralAdjustmentCodesIcms` entities.
   */
  getAll(): GetAllRequestBuilder<FbGeneralAdjustmentCodesIcms<T>, T> {
    return new GetAllRequestBuilder<FbGeneralAdjustmentCodesIcms<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `FbGeneralAdjustmentCodesIcms` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FbGeneralAdjustmentCodesIcms`.
   */
  create(
    entity: FbGeneralAdjustmentCodesIcms<T>
  ): CreateRequestBuilder<FbGeneralAdjustmentCodesIcms<T>, T> {
    return new CreateRequestBuilder<FbGeneralAdjustmentCodesIcms<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FbGeneralAdjustmentCodesIcms` entity based on its keys.
   * @param identification Key property. See {@link FbGeneralAdjustmentCodesIcms.identification}.
   * @returns A request builder for creating requests to retrieve one `FbGeneralAdjustmentCodesIcms` entity based on its keys.
   */
  getByKey(
    identification: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FbGeneralAdjustmentCodesIcms<T>, T> {
    return new GetByKeyRequestBuilder<FbGeneralAdjustmentCodesIcms<T>, T>(
      this.entityApi,
      { Identification: identification }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FbGeneralAdjustmentCodesIcms`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FbGeneralAdjustmentCodesIcms`.
   */
  update(
    entity: FbGeneralAdjustmentCodesIcms<T>
  ): UpdateRequestBuilder<FbGeneralAdjustmentCodesIcms<T>, T> {
    return new UpdateRequestBuilder<FbGeneralAdjustmentCodesIcms<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FbGeneralAdjustmentCodesIcms`.
   * @param identification Key property. See {@link FbGeneralAdjustmentCodesIcms.identification}.
   * @returns A request builder for creating requests that delete an entity of type `FbGeneralAdjustmentCodesIcms`.
   */
  delete(
    identification: string
  ): DeleteRequestBuilder<FbGeneralAdjustmentCodesIcms<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FbGeneralAdjustmentCodesIcms`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FbGeneralAdjustmentCodesIcms` by taking the entity as a parameter.
   */
  delete(
    entity: FbGeneralAdjustmentCodesIcms<T>
  ): DeleteRequestBuilder<FbGeneralAdjustmentCodesIcms<T>, T>;
  delete(
    identificationOrEntity: any
  ): DeleteRequestBuilder<FbGeneralAdjustmentCodesIcms<T>, T> {
    return new DeleteRequestBuilder<FbGeneralAdjustmentCodesIcms<T>, T>(
      this.entityApi,
      identificationOrEntity instanceof FbGeneralAdjustmentCodesIcms
        ? identificationOrEntity
        : { Identification: identificationOrEntity! }
    );
  }
}
