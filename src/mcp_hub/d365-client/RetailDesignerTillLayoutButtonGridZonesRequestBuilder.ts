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
import { RetailDesignerTillLayoutButtonGridZones } from './RetailDesignerTillLayoutButtonGridZones';

/**
 * Request builder class for operations supported on the {@link RetailDesignerTillLayoutButtonGridZones} entity.
 */
export class RetailDesignerTillLayoutButtonGridZonesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailDesignerTillLayoutButtonGridZones<T>, T> {
  /**
   * Returns a request builder for querying all `RetailDesignerTillLayoutButtonGridZones` entities.
   * @returns A request builder for creating requests to retrieve all `RetailDesignerTillLayoutButtonGridZones` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailDesignerTillLayoutButtonGridZones<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailDesignerTillLayoutButtonGridZones<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailDesignerTillLayoutButtonGridZones` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailDesignerTillLayoutButtonGridZones`.
   */
  create(
    entity: RetailDesignerTillLayoutButtonGridZones<T>
  ): CreateRequestBuilder<RetailDesignerTillLayoutButtonGridZones<T>, T> {
    return new CreateRequestBuilder<
      RetailDesignerTillLayoutButtonGridZones<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailDesignerTillLayoutButtonGridZones` entity based on its keys.
   * @param layoutId Key property. See {@link RetailDesignerTillLayoutButtonGridZones.layoutId}.
   * @param zone Key property. See {@link RetailDesignerTillLayoutButtonGridZones.zone}.
   * @returns A request builder for creating requests to retrieve one `RetailDesignerTillLayoutButtonGridZones` entity based on its keys.
   */
  getByKey(
    layoutId: DeserializedType<T, 'Edm.String'>,
    zone: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<RetailDesignerTillLayoutButtonGridZones<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailDesignerTillLayoutButtonGridZones<T>,
      T
    >(this.entityApi, {
      LayoutId: layoutId,
      Zone: zone
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailDesignerTillLayoutButtonGridZones`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailDesignerTillLayoutButtonGridZones`.
   */
  update(
    entity: RetailDesignerTillLayoutButtonGridZones<T>
  ): UpdateRequestBuilder<RetailDesignerTillLayoutButtonGridZones<T>, T> {
    return new UpdateRequestBuilder<
      RetailDesignerTillLayoutButtonGridZones<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailDesignerTillLayoutButtonGridZones`.
   * @param layoutId Key property. See {@link RetailDesignerTillLayoutButtonGridZones.layoutId}.
   * @param zone Key property. See {@link RetailDesignerTillLayoutButtonGridZones.zone}.
   * @returns A request builder for creating requests that delete an entity of type `RetailDesignerTillLayoutButtonGridZones`.
   */
  delete(
    layoutId: string,
    zone: BigNumber
  ): DeleteRequestBuilder<RetailDesignerTillLayoutButtonGridZones<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailDesignerTillLayoutButtonGridZones`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailDesignerTillLayoutButtonGridZones` by taking the entity as a parameter.
   */
  delete(
    entity: RetailDesignerTillLayoutButtonGridZones<T>
  ): DeleteRequestBuilder<RetailDesignerTillLayoutButtonGridZones<T>, T>;
  delete(
    layoutIdOrEntity: any,
    zone?: BigNumber
  ): DeleteRequestBuilder<RetailDesignerTillLayoutButtonGridZones<T>, T> {
    return new DeleteRequestBuilder<
      RetailDesignerTillLayoutButtonGridZones<T>,
      T
    >(
      this.entityApi,
      layoutIdOrEntity instanceof RetailDesignerTillLayoutButtonGridZones
        ? layoutIdOrEntity
        : {
            LayoutId: layoutIdOrEntity!,
            Zone: zone!
          }
    );
  }
}
