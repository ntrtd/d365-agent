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
import { InventoryCountingReasonCodes } from './InventoryCountingReasonCodes';

/**
 * Request builder class for operations supported on the {@link InventoryCountingReasonCodes} entity.
 */
export class InventoryCountingReasonCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventoryCountingReasonCodes<T>, T> {
  /**
   * Returns a request builder for querying all `InventoryCountingReasonCodes` entities.
   * @returns A request builder for creating requests to retrieve all `InventoryCountingReasonCodes` entities.
   */
  getAll(): GetAllRequestBuilder<InventoryCountingReasonCodes<T>, T> {
    return new GetAllRequestBuilder<InventoryCountingReasonCodes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InventoryCountingReasonCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventoryCountingReasonCodes`.
   */
  create(
    entity: InventoryCountingReasonCodes<T>
  ): CreateRequestBuilder<InventoryCountingReasonCodes<T>, T> {
    return new CreateRequestBuilder<InventoryCountingReasonCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventoryCountingReasonCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventoryCountingReasonCodes.dataAreaId}.
   * @param reasonCode Key property. See {@link InventoryCountingReasonCodes.reasonCode}.
   * @returns A request builder for creating requests to retrieve one `InventoryCountingReasonCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    reasonCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InventoryCountingReasonCodes<T>, T> {
    return new GetByKeyRequestBuilder<InventoryCountingReasonCodes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ReasonCode: reasonCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventoryCountingReasonCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventoryCountingReasonCodes`.
   */
  update(
    entity: InventoryCountingReasonCodes<T>
  ): UpdateRequestBuilder<InventoryCountingReasonCodes<T>, T> {
    return new UpdateRequestBuilder<InventoryCountingReasonCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventoryCountingReasonCodes`.
   * @param dataAreaId Key property. See {@link InventoryCountingReasonCodes.dataAreaId}.
   * @param reasonCode Key property. See {@link InventoryCountingReasonCodes.reasonCode}.
   * @returns A request builder for creating requests that delete an entity of type `InventoryCountingReasonCodes`.
   */
  delete(
    dataAreaId: string,
    reasonCode: string
  ): DeleteRequestBuilder<InventoryCountingReasonCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventoryCountingReasonCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventoryCountingReasonCodes` by taking the entity as a parameter.
   */
  delete(
    entity: InventoryCountingReasonCodes<T>
  ): DeleteRequestBuilder<InventoryCountingReasonCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    reasonCode?: string
  ): DeleteRequestBuilder<InventoryCountingReasonCodes<T>, T> {
    return new DeleteRequestBuilder<InventoryCountingReasonCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventoryCountingReasonCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ReasonCode: reasonCode!
          }
    );
  }
}
