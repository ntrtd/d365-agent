/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { RetailKitReleasedComponents } from './RetailKitReleasedComponents';

/**
 * Request builder class for operations supported on the {@link RetailKitReleasedComponents} entity.
 */
export class RetailKitReleasedComponentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailKitReleasedComponents<T>, T> {
  /**
   * Returns a request builder for querying all `RetailKitReleasedComponents` entities.
   * @returns A request builder for creating requests to retrieve all `RetailKitReleasedComponents` entities.
   */
  getAll(): GetAllRequestBuilder<RetailKitReleasedComponents<T>, T> {
    return new GetAllRequestBuilder<RetailKitReleasedComponents<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailKitReleasedComponents` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailKitReleasedComponents`.
   */
  create(
    entity: RetailKitReleasedComponents<T>
  ): CreateRequestBuilder<RetailKitReleasedComponents<T>, T> {
    return new CreateRequestBuilder<RetailKitReleasedComponents<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailKitReleasedComponents` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailKitReleasedComponents.dataAreaId}.
   * @param kitProductNumber Key property. See {@link RetailKitReleasedComponents.kitProductNumber}.
   * @param kitComponentLineNumber Key property. See {@link RetailKitReleasedComponents.kitComponentLineNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailKitReleasedComponents` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    kitProductNumber: DeserializedType<T, 'Edm.String'>,
    kitComponentLineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<RetailKitReleasedComponents<T>, T> {
    return new GetByKeyRequestBuilder<RetailKitReleasedComponents<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        KitProductNumber: kitProductNumber,
        KitComponentLineNumber: kitComponentLineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailKitReleasedComponents`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailKitReleasedComponents`.
   */
  update(
    entity: RetailKitReleasedComponents<T>
  ): UpdateRequestBuilder<RetailKitReleasedComponents<T>, T> {
    return new UpdateRequestBuilder<RetailKitReleasedComponents<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailKitReleasedComponents`.
   * @param dataAreaId Key property. See {@link RetailKitReleasedComponents.dataAreaId}.
   * @param kitProductNumber Key property. See {@link RetailKitReleasedComponents.kitProductNumber}.
   * @param kitComponentLineNumber Key property. See {@link RetailKitReleasedComponents.kitComponentLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailKitReleasedComponents`.
   */
  delete(
    dataAreaId: string,
    kitProductNumber: string,
    kitComponentLineNumber: BigNumber
  ): DeleteRequestBuilder<RetailKitReleasedComponents<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailKitReleasedComponents`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailKitReleasedComponents` by taking the entity as a parameter.
   */
  delete(
    entity: RetailKitReleasedComponents<T>
  ): DeleteRequestBuilder<RetailKitReleasedComponents<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    kitProductNumber?: string,
    kitComponentLineNumber?: BigNumber
  ): DeleteRequestBuilder<RetailKitReleasedComponents<T>, T> {
    return new DeleteRequestBuilder<RetailKitReleasedComponents<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailKitReleasedComponents
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            KitProductNumber: kitProductNumber!,
            KitComponentLineNumber: kitComponentLineNumber!
          }
    );
  }
}
