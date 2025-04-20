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
import { FbGeneralAdjustmentCodesPiscofins } from './FbGeneralAdjustmentCodesPiscofins';

/**
 * Request builder class for operations supported on the {@link FbGeneralAdjustmentCodesPiscofins} entity.
 */
export class FbGeneralAdjustmentCodesPiscofinsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FbGeneralAdjustmentCodesPiscofins<T>, T> {
  /**
   * Returns a request builder for querying all `FbGeneralAdjustmentCodesPiscofins` entities.
   * @returns A request builder for creating requests to retrieve all `FbGeneralAdjustmentCodesPiscofins` entities.
   */
  getAll(): GetAllRequestBuilder<FbGeneralAdjustmentCodesPiscofins<T>, T> {
    return new GetAllRequestBuilder<FbGeneralAdjustmentCodesPiscofins<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `FbGeneralAdjustmentCodesPiscofins` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FbGeneralAdjustmentCodesPiscofins`.
   */
  create(
    entity: FbGeneralAdjustmentCodesPiscofins<T>
  ): CreateRequestBuilder<FbGeneralAdjustmentCodesPiscofins<T>, T> {
    return new CreateRequestBuilder<FbGeneralAdjustmentCodesPiscofins<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FbGeneralAdjustmentCodesPiscofins` entity based on its keys.
   * @param identification Key property. See {@link FbGeneralAdjustmentCodesPiscofins.identification}.
   * @returns A request builder for creating requests to retrieve one `FbGeneralAdjustmentCodesPiscofins` entity based on its keys.
   */
  getByKey(
    identification: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FbGeneralAdjustmentCodesPiscofins<T>, T> {
    return new GetByKeyRequestBuilder<FbGeneralAdjustmentCodesPiscofins<T>, T>(
      this.entityApi,
      { Identification: identification }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FbGeneralAdjustmentCodesPiscofins`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FbGeneralAdjustmentCodesPiscofins`.
   */
  update(
    entity: FbGeneralAdjustmentCodesPiscofins<T>
  ): UpdateRequestBuilder<FbGeneralAdjustmentCodesPiscofins<T>, T> {
    return new UpdateRequestBuilder<FbGeneralAdjustmentCodesPiscofins<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FbGeneralAdjustmentCodesPiscofins`.
   * @param identification Key property. See {@link FbGeneralAdjustmentCodesPiscofins.identification}.
   * @returns A request builder for creating requests that delete an entity of type `FbGeneralAdjustmentCodesPiscofins`.
   */
  delete(
    identification: string
  ): DeleteRequestBuilder<FbGeneralAdjustmentCodesPiscofins<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FbGeneralAdjustmentCodesPiscofins`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FbGeneralAdjustmentCodesPiscofins` by taking the entity as a parameter.
   */
  delete(
    entity: FbGeneralAdjustmentCodesPiscofins<T>
  ): DeleteRequestBuilder<FbGeneralAdjustmentCodesPiscofins<T>, T>;
  delete(
    identificationOrEntity: any
  ): DeleteRequestBuilder<FbGeneralAdjustmentCodesPiscofins<T>, T> {
    return new DeleteRequestBuilder<FbGeneralAdjustmentCodesPiscofins<T>, T>(
      this.entityApi,
      identificationOrEntity instanceof FbGeneralAdjustmentCodesPiscofins
        ? identificationOrEntity
        : { Identification: identificationOrEntity! }
    );
  }
}
