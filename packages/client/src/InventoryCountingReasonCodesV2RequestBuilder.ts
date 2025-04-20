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
import { InventoryCountingReasonCodesV2 } from './InventoryCountingReasonCodesV2';

/**
 * Request builder class for operations supported on the {@link InventoryCountingReasonCodesV2} entity.
 */
export class InventoryCountingReasonCodesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventoryCountingReasonCodesV2<T>, T> {
  /**
   * Returns a request builder for querying all `InventoryCountingReasonCodesV2` entities.
   * @returns A request builder for creating requests to retrieve all `InventoryCountingReasonCodesV2` entities.
   */
  getAll(): GetAllRequestBuilder<InventoryCountingReasonCodesV2<T>, T> {
    return new GetAllRequestBuilder<InventoryCountingReasonCodesV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InventoryCountingReasonCodesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventoryCountingReasonCodesV2`.
   */
  create(
    entity: InventoryCountingReasonCodesV2<T>
  ): CreateRequestBuilder<InventoryCountingReasonCodesV2<T>, T> {
    return new CreateRequestBuilder<InventoryCountingReasonCodesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventoryCountingReasonCodesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventoryCountingReasonCodesV2.dataAreaId}.
   * @param reasonCode Key property. See {@link InventoryCountingReasonCodesV2.reasonCode}.
   * @returns A request builder for creating requests to retrieve one `InventoryCountingReasonCodesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    reasonCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InventoryCountingReasonCodesV2<T>, T> {
    return new GetByKeyRequestBuilder<InventoryCountingReasonCodesV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ReasonCode: reasonCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventoryCountingReasonCodesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventoryCountingReasonCodesV2`.
   */
  update(
    entity: InventoryCountingReasonCodesV2<T>
  ): UpdateRequestBuilder<InventoryCountingReasonCodesV2<T>, T> {
    return new UpdateRequestBuilder<InventoryCountingReasonCodesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventoryCountingReasonCodesV2`.
   * @param dataAreaId Key property. See {@link InventoryCountingReasonCodesV2.dataAreaId}.
   * @param reasonCode Key property. See {@link InventoryCountingReasonCodesV2.reasonCode}.
   * @returns A request builder for creating requests that delete an entity of type `InventoryCountingReasonCodesV2`.
   */
  delete(
    dataAreaId: string,
    reasonCode: string
  ): DeleteRequestBuilder<InventoryCountingReasonCodesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventoryCountingReasonCodesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventoryCountingReasonCodesV2` by taking the entity as a parameter.
   */
  delete(
    entity: InventoryCountingReasonCodesV2<T>
  ): DeleteRequestBuilder<InventoryCountingReasonCodesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    reasonCode?: string
  ): DeleteRequestBuilder<InventoryCountingReasonCodesV2<T>, T> {
    return new DeleteRequestBuilder<InventoryCountingReasonCodesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventoryCountingReasonCodesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ReasonCode: reasonCode!
          }
    );
  }
}
