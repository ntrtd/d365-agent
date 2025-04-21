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
import { EcoResCategoryBiEntities } from './EcoResCategoryBiEntities';

/**
 * Request builder class for operations supported on the {@link EcoResCategoryBiEntities} entity.
 */
export class EcoResCategoryBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EcoResCategoryBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `EcoResCategoryBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `EcoResCategoryBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<EcoResCategoryBiEntities<T>, T> {
    return new GetAllRequestBuilder<EcoResCategoryBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EcoResCategoryBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EcoResCategoryBiEntities`.
   */
  create(
    entity: EcoResCategoryBiEntities<T>
  ): CreateRequestBuilder<EcoResCategoryBiEntities<T>, T> {
    return new CreateRequestBuilder<EcoResCategoryBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EcoResCategoryBiEntities` entity based on its keys.
   * @param name Key property. See {@link EcoResCategoryBiEntities.name}.
   * @param categoryHierarchy Key property. See {@link EcoResCategoryBiEntities.categoryHierarchy}.
   * @returns A request builder for creating requests to retrieve one `EcoResCategoryBiEntities` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>,
    categoryHierarchy: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<EcoResCategoryBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<EcoResCategoryBiEntities<T>, T>(
      this.entityApi,
      {
        Name: name,
        CategoryHierarchy: categoryHierarchy
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EcoResCategoryBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EcoResCategoryBiEntities`.
   */
  update(
    entity: EcoResCategoryBiEntities<T>
  ): UpdateRequestBuilder<EcoResCategoryBiEntities<T>, T> {
    return new UpdateRequestBuilder<EcoResCategoryBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EcoResCategoryBiEntities`.
   * @param name Key property. See {@link EcoResCategoryBiEntities.name}.
   * @param categoryHierarchy Key property. See {@link EcoResCategoryBiEntities.categoryHierarchy}.
   * @returns A request builder for creating requests that delete an entity of type `EcoResCategoryBiEntities`.
   */
  delete(
    name: string,
    categoryHierarchy: BigNumber
  ): DeleteRequestBuilder<EcoResCategoryBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EcoResCategoryBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EcoResCategoryBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: EcoResCategoryBiEntities<T>
  ): DeleteRequestBuilder<EcoResCategoryBiEntities<T>, T>;
  delete(
    nameOrEntity: any,
    categoryHierarchy?: BigNumber
  ): DeleteRequestBuilder<EcoResCategoryBiEntities<T>, T> {
    return new DeleteRequestBuilder<EcoResCategoryBiEntities<T>, T>(
      this.entityApi,
      nameOrEntity instanceof EcoResCategoryBiEntities
        ? nameOrEntity
        : {
            Name: nameOrEntity!,
            CategoryHierarchy: categoryHierarchy!
          }
    );
  }
}
