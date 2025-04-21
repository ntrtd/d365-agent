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
import { PriceTolerances } from './PriceTolerances';
import { TableGroupAll } from './TableGroupAll';

/**
 * Request builder class for operations supported on the {@link PriceTolerances} entity.
 */
export class PriceTolerancesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PriceTolerances<T>, T> {
  /**
   * Returns a request builder for querying all `PriceTolerances` entities.
   * @returns A request builder for creating requests to retrieve all `PriceTolerances` entities.
   */
  getAll(): GetAllRequestBuilder<PriceTolerances<T>, T> {
    return new GetAllRequestBuilder<PriceTolerances<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PriceTolerances` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PriceTolerances`.
   */
  create(
    entity: PriceTolerances<T>
  ): CreateRequestBuilder<PriceTolerances<T>, T> {
    return new CreateRequestBuilder<PriceTolerances<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PriceTolerances` entity based on its keys.
   * @param dataAreaId Key property. See {@link PriceTolerances.dataAreaId}.
   * @param itemCode Key property. See {@link PriceTolerances.itemCode}.
   * @param itemRelation Key property. See {@link PriceTolerances.itemRelation}.
   * @param accountCode Key property. See {@link PriceTolerances.accountCode}.
   * @param accountRelation Key property. See {@link PriceTolerances.accountRelation}.
   * @returns A request builder for creating requests to retrieve one `PriceTolerances` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemCode: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TableGroupAll'
    >,
    itemRelation: DeserializedType<T, 'Edm.String'>,
    accountCode: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TableGroupAll'
    >,
    accountRelation: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PriceTolerances<T>, T> {
    return new GetByKeyRequestBuilder<PriceTolerances<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ItemCode: itemCode,
      ItemRelation: itemRelation,
      AccountCode: accountCode,
      AccountRelation: accountRelation
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PriceTolerances`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PriceTolerances`.
   */
  update(
    entity: PriceTolerances<T>
  ): UpdateRequestBuilder<PriceTolerances<T>, T> {
    return new UpdateRequestBuilder<PriceTolerances<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PriceTolerances`.
   * @param dataAreaId Key property. See {@link PriceTolerances.dataAreaId}.
   * @param itemCode Key property. See {@link PriceTolerances.itemCode}.
   * @param itemRelation Key property. See {@link PriceTolerances.itemRelation}.
   * @param accountCode Key property. See {@link PriceTolerances.accountCode}.
   * @param accountRelation Key property. See {@link PriceTolerances.accountRelation}.
   * @returns A request builder for creating requests that delete an entity of type `PriceTolerances`.
   */
  delete(
    dataAreaId: string,
    itemCode: TableGroupAll,
    itemRelation: string,
    accountCode: TableGroupAll,
    accountRelation: string
  ): DeleteRequestBuilder<PriceTolerances<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PriceTolerances`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PriceTolerances` by taking the entity as a parameter.
   */
  delete(
    entity: PriceTolerances<T>
  ): DeleteRequestBuilder<PriceTolerances<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemCode?: TableGroupAll,
    itemRelation?: string,
    accountCode?: TableGroupAll,
    accountRelation?: string
  ): DeleteRequestBuilder<PriceTolerances<T>, T> {
    return new DeleteRequestBuilder<PriceTolerances<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PriceTolerances
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemCode: itemCode!,
            ItemRelation: itemRelation!,
            AccountCode: accountCode!,
            AccountRelation: accountRelation!
          }
    );
  }
}
