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
import { RetailDesignerTillLayoutImageZones } from './RetailDesignerTillLayoutImageZones';

/**
 * Request builder class for operations supported on the {@link RetailDesignerTillLayoutImageZones} entity.
 */
export class RetailDesignerTillLayoutImageZonesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailDesignerTillLayoutImageZones<T>, T> {
  /**
   * Returns a request builder for querying all `RetailDesignerTillLayoutImageZones` entities.
   * @returns A request builder for creating requests to retrieve all `RetailDesignerTillLayoutImageZones` entities.
   */
  getAll(): GetAllRequestBuilder<RetailDesignerTillLayoutImageZones<T>, T> {
    return new GetAllRequestBuilder<RetailDesignerTillLayoutImageZones<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailDesignerTillLayoutImageZones` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailDesignerTillLayoutImageZones`.
   */
  create(
    entity: RetailDesignerTillLayoutImageZones<T>
  ): CreateRequestBuilder<RetailDesignerTillLayoutImageZones<T>, T> {
    return new CreateRequestBuilder<RetailDesignerTillLayoutImageZones<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailDesignerTillLayoutImageZones` entity based on its keys.
   * @param layoutId Key property. See {@link RetailDesignerTillLayoutImageZones.layoutId}.
   * @param zone Key property. See {@link RetailDesignerTillLayoutImageZones.zone}.
   * @returns A request builder for creating requests to retrieve one `RetailDesignerTillLayoutImageZones` entity based on its keys.
   */
  getByKey(
    layoutId: DeserializedType<T, 'Edm.String'>,
    zone: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<RetailDesignerTillLayoutImageZones<T>, T> {
    return new GetByKeyRequestBuilder<RetailDesignerTillLayoutImageZones<T>, T>(
      this.entityApi,
      {
        LayoutId: layoutId,
        Zone: zone
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailDesignerTillLayoutImageZones`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailDesignerTillLayoutImageZones`.
   */
  update(
    entity: RetailDesignerTillLayoutImageZones<T>
  ): UpdateRequestBuilder<RetailDesignerTillLayoutImageZones<T>, T> {
    return new UpdateRequestBuilder<RetailDesignerTillLayoutImageZones<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailDesignerTillLayoutImageZones`.
   * @param layoutId Key property. See {@link RetailDesignerTillLayoutImageZones.layoutId}.
   * @param zone Key property. See {@link RetailDesignerTillLayoutImageZones.zone}.
   * @returns A request builder for creating requests that delete an entity of type `RetailDesignerTillLayoutImageZones`.
   */
  delete(
    layoutId: string,
    zone: BigNumber
  ): DeleteRequestBuilder<RetailDesignerTillLayoutImageZones<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailDesignerTillLayoutImageZones`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailDesignerTillLayoutImageZones` by taking the entity as a parameter.
   */
  delete(
    entity: RetailDesignerTillLayoutImageZones<T>
  ): DeleteRequestBuilder<RetailDesignerTillLayoutImageZones<T>, T>;
  delete(
    layoutIdOrEntity: any,
    zone?: BigNumber
  ): DeleteRequestBuilder<RetailDesignerTillLayoutImageZones<T>, T> {
    return new DeleteRequestBuilder<RetailDesignerTillLayoutImageZones<T>, T>(
      this.entityApi,
      layoutIdOrEntity instanceof RetailDesignerTillLayoutImageZones
        ? layoutIdOrEntity
        : {
            LayoutId: layoutIdOrEntity!,
            Zone: zone!
          }
    );
  }
}
