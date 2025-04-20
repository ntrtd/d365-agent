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
import { BudgetReservationHeader_PsnBiEntities } from './BudgetReservationHeader_PsnBiEntities';

/**
 * Request builder class for operations supported on the {@link BudgetReservationHeader_PsnBiEntities} entity.
 */
export class BudgetReservationHeader_PsnBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetReservationHeader_PsnBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetReservationHeader_PsnBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetReservationHeader_PsnBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetReservationHeader_PsnBiEntities<T>, T> {
    return new GetAllRequestBuilder<
      BudgetReservationHeader_PsnBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BudgetReservationHeader_PsnBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetReservationHeader_PsnBiEntities`.
   */
  create(
    entity: BudgetReservationHeader_PsnBiEntities<T>
  ): CreateRequestBuilder<BudgetReservationHeader_PsnBiEntities<T>, T> {
    return new CreateRequestBuilder<
      BudgetReservationHeader_PsnBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `BudgetReservationHeader_PsnBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link BudgetReservationHeader_PsnBiEntities.dataAreaId}.
   * @param documentNumber Key property. See {@link BudgetReservationHeader_PsnBiEntities.documentNumber}.
   * @returns A request builder for creating requests to retrieve one `BudgetReservationHeader_PsnBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    documentNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BudgetReservationHeader_PsnBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      BudgetReservationHeader_PsnBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      DocumentNumber: documentNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetReservationHeader_PsnBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetReservationHeader_PsnBiEntities`.
   */
  update(
    entity: BudgetReservationHeader_PsnBiEntities<T>
  ): UpdateRequestBuilder<BudgetReservationHeader_PsnBiEntities<T>, T> {
    return new UpdateRequestBuilder<
      BudgetReservationHeader_PsnBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetReservationHeader_PsnBiEntities`.
   * @param dataAreaId Key property. See {@link BudgetReservationHeader_PsnBiEntities.dataAreaId}.
   * @param documentNumber Key property. See {@link BudgetReservationHeader_PsnBiEntities.documentNumber}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetReservationHeader_PsnBiEntities`.
   */
  delete(
    dataAreaId: string,
    documentNumber: string
  ): DeleteRequestBuilder<BudgetReservationHeader_PsnBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetReservationHeader_PsnBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetReservationHeader_PsnBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetReservationHeader_PsnBiEntities<T>
  ): DeleteRequestBuilder<BudgetReservationHeader_PsnBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    documentNumber?: string
  ): DeleteRequestBuilder<BudgetReservationHeader_PsnBiEntities<T>, T> {
    return new DeleteRequestBuilder<
      BudgetReservationHeader_PsnBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof BudgetReservationHeader_PsnBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DocumentNumber: documentNumber!
          }
    );
  }
}
