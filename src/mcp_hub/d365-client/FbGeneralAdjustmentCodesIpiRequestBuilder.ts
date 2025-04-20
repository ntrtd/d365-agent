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
import { FbGeneralAdjustmentCodesIpi } from './FbGeneralAdjustmentCodesIpi';

/**
 * Request builder class for operations supported on the {@link FbGeneralAdjustmentCodesIpi} entity.
 */
export class FbGeneralAdjustmentCodesIpiRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FbGeneralAdjustmentCodesIpi<T>, T> {
  /**
   * Returns a request builder for querying all `FbGeneralAdjustmentCodesIpi` entities.
   * @returns A request builder for creating requests to retrieve all `FbGeneralAdjustmentCodesIpi` entities.
   */
  getAll(): GetAllRequestBuilder<FbGeneralAdjustmentCodesIpi<T>, T> {
    return new GetAllRequestBuilder<FbGeneralAdjustmentCodesIpi<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `FbGeneralAdjustmentCodesIpi` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FbGeneralAdjustmentCodesIpi`.
   */
  create(
    entity: FbGeneralAdjustmentCodesIpi<T>
  ): CreateRequestBuilder<FbGeneralAdjustmentCodesIpi<T>, T> {
    return new CreateRequestBuilder<FbGeneralAdjustmentCodesIpi<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FbGeneralAdjustmentCodesIpi` entity based on its keys.
   * @param adjustmentCode Key property. See {@link FbGeneralAdjustmentCodesIpi.adjustmentCode}.
   * @returns A request builder for creating requests to retrieve one `FbGeneralAdjustmentCodesIpi` entity based on its keys.
   */
  getByKey(
    adjustmentCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FbGeneralAdjustmentCodesIpi<T>, T> {
    return new GetByKeyRequestBuilder<FbGeneralAdjustmentCodesIpi<T>, T>(
      this.entityApi,
      { AdjustmentCode: adjustmentCode }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FbGeneralAdjustmentCodesIpi`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FbGeneralAdjustmentCodesIpi`.
   */
  update(
    entity: FbGeneralAdjustmentCodesIpi<T>
  ): UpdateRequestBuilder<FbGeneralAdjustmentCodesIpi<T>, T> {
    return new UpdateRequestBuilder<FbGeneralAdjustmentCodesIpi<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FbGeneralAdjustmentCodesIpi`.
   * @param adjustmentCode Key property. See {@link FbGeneralAdjustmentCodesIpi.adjustmentCode}.
   * @returns A request builder for creating requests that delete an entity of type `FbGeneralAdjustmentCodesIpi`.
   */
  delete(
    adjustmentCode: string
  ): DeleteRequestBuilder<FbGeneralAdjustmentCodesIpi<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FbGeneralAdjustmentCodesIpi`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FbGeneralAdjustmentCodesIpi` by taking the entity as a parameter.
   */
  delete(
    entity: FbGeneralAdjustmentCodesIpi<T>
  ): DeleteRequestBuilder<FbGeneralAdjustmentCodesIpi<T>, T>;
  delete(
    adjustmentCodeOrEntity: any
  ): DeleteRequestBuilder<FbGeneralAdjustmentCodesIpi<T>, T> {
    return new DeleteRequestBuilder<FbGeneralAdjustmentCodesIpi<T>, T>(
      this.entityApi,
      adjustmentCodeOrEntity instanceof FbGeneralAdjustmentCodesIpi
        ? adjustmentCodeOrEntity
        : { AdjustmentCode: adjustmentCodeOrEntity! }
    );
  }
}
