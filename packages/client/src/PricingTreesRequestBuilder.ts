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
import { PricingTrees } from './PricingTrees';

/**
 * Request builder class for operations supported on the {@link PricingTrees} entity.
 */
export class PricingTreesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PricingTrees<T>, T> {
  /**
   * Returns a request builder for querying all `PricingTrees` entities.
   * @returns A request builder for creating requests to retrieve all `PricingTrees` entities.
   */
  getAll(): GetAllRequestBuilder<PricingTrees<T>, T> {
    return new GetAllRequestBuilder<PricingTrees<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PricingTrees` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PricingTrees`.
   */
  create(entity: PricingTrees<T>): CreateRequestBuilder<PricingTrees<T>, T> {
    return new CreateRequestBuilder<PricingTrees<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `PricingTrees` entity based on its keys.
   * @param dataAreaId Key property. See {@link PricingTrees.dataAreaId}.
   * @param name Key property. See {@link PricingTrees.name}.
   * @returns A request builder for creating requests to retrieve one `PricingTrees` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PricingTrees<T>, T> {
    return new GetByKeyRequestBuilder<PricingTrees<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Name: name
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PricingTrees`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PricingTrees`.
   */
  update(entity: PricingTrees<T>): UpdateRequestBuilder<PricingTrees<T>, T> {
    return new UpdateRequestBuilder<PricingTrees<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PricingTrees`.
   * @param dataAreaId Key property. See {@link PricingTrees.dataAreaId}.
   * @param name Key property. See {@link PricingTrees.name}.
   * @returns A request builder for creating requests that delete an entity of type `PricingTrees`.
   */
  delete(
    dataAreaId: string,
    name: string
  ): DeleteRequestBuilder<PricingTrees<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PricingTrees`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PricingTrees` by taking the entity as a parameter.
   */
  delete(entity: PricingTrees<T>): DeleteRequestBuilder<PricingTrees<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    name?: string
  ): DeleteRequestBuilder<PricingTrees<T>, T> {
    return new DeleteRequestBuilder<PricingTrees<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PricingTrees
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Name: name!
          }
    );
  }
}
