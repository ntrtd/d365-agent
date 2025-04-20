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
import { BudgetReservationType_PsnBiEntities } from './BudgetReservationType_PsnBiEntities';

/**
 * Request builder class for operations supported on the {@link BudgetReservationType_PsnBiEntities} entity.
 */
export class BudgetReservationType_PsnBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetReservationType_PsnBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetReservationType_PsnBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetReservationType_PsnBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetReservationType_PsnBiEntities<T>, T> {
    return new GetAllRequestBuilder<BudgetReservationType_PsnBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BudgetReservationType_PsnBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetReservationType_PsnBiEntities`.
   */
  create(
    entity: BudgetReservationType_PsnBiEntities<T>
  ): CreateRequestBuilder<BudgetReservationType_PsnBiEntities<T>, T> {
    return new CreateRequestBuilder<BudgetReservationType_PsnBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BudgetReservationType_PsnBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link BudgetReservationType_PsnBiEntities.dataAreaId}.
   * @param name Key property. See {@link BudgetReservationType_PsnBiEntities.name}.
   * @returns A request builder for creating requests to retrieve one `BudgetReservationType_PsnBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BudgetReservationType_PsnBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      BudgetReservationType_PsnBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      Name: name
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetReservationType_PsnBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetReservationType_PsnBiEntities`.
   */
  update(
    entity: BudgetReservationType_PsnBiEntities<T>
  ): UpdateRequestBuilder<BudgetReservationType_PsnBiEntities<T>, T> {
    return new UpdateRequestBuilder<BudgetReservationType_PsnBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetReservationType_PsnBiEntities`.
   * @param dataAreaId Key property. See {@link BudgetReservationType_PsnBiEntities.dataAreaId}.
   * @param name Key property. See {@link BudgetReservationType_PsnBiEntities.name}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetReservationType_PsnBiEntities`.
   */
  delete(
    dataAreaId: string,
    name: string
  ): DeleteRequestBuilder<BudgetReservationType_PsnBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetReservationType_PsnBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetReservationType_PsnBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetReservationType_PsnBiEntities<T>
  ): DeleteRequestBuilder<BudgetReservationType_PsnBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    name?: string
  ): DeleteRequestBuilder<BudgetReservationType_PsnBiEntities<T>, T> {
    return new DeleteRequestBuilder<BudgetReservationType_PsnBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BudgetReservationType_PsnBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Name: name!
          }
    );
  }
}
