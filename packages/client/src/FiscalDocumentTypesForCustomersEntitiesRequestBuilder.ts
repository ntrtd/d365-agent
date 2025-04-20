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
import { FiscalDocumentTypesForCustomersEntities } from './FiscalDocumentTypesForCustomersEntities';
import { TableGroupAll } from './TableGroupAll';
import { ItemType } from './ItemType';

/**
 * Request builder class for operations supported on the {@link FiscalDocumentTypesForCustomersEntities} entity.
 */
export class FiscalDocumentTypesForCustomersEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FiscalDocumentTypesForCustomersEntities<T>, T> {
  /**
   * Returns a request builder for querying all `FiscalDocumentTypesForCustomersEntities` entities.
   * @returns A request builder for creating requests to retrieve all `FiscalDocumentTypesForCustomersEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    FiscalDocumentTypesForCustomersEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      FiscalDocumentTypesForCustomersEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FiscalDocumentTypesForCustomersEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FiscalDocumentTypesForCustomersEntities`.
   */
  create(
    entity: FiscalDocumentTypesForCustomersEntities<T>
  ): CreateRequestBuilder<FiscalDocumentTypesForCustomersEntities<T>, T> {
    return new CreateRequestBuilder<
      FiscalDocumentTypesForCustomersEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `FiscalDocumentTypesForCustomersEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link FiscalDocumentTypesForCustomersEntities.dataAreaId}.
   * @param accountCode Key property. See {@link FiscalDocumentTypesForCustomersEntities.accountCode}.
   * @param accountRelation Key property. See {@link FiscalDocumentTypesForCustomersEntities.accountRelation}.
   * @param itemType Key property. See {@link FiscalDocumentTypesForCustomersEntities.itemType}.
   * @param fiscalEstablishmentId Key property. See {@link FiscalDocumentTypesForCustomersEntities.fiscalEstablishmentId}.
   * @returns A request builder for creating requests to retrieve one `FiscalDocumentTypesForCustomersEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    accountCode: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TableGroupAll'
    >,
    accountRelation: DeserializedType<T, 'Edm.String'>,
    itemType: DeserializedType<T, 'Microsoft.Dynamics.DataEntities.ItemType'>,
    fiscalEstablishmentId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FiscalDocumentTypesForCustomersEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      FiscalDocumentTypesForCustomersEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      AccountCode: accountCode,
      AccountRelation: accountRelation,
      ItemType: itemType,
      FiscalEstablishmentId: fiscalEstablishmentId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `FiscalDocumentTypesForCustomersEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FiscalDocumentTypesForCustomersEntities`.
   */
  update(
    entity: FiscalDocumentTypesForCustomersEntities<T>
  ): UpdateRequestBuilder<FiscalDocumentTypesForCustomersEntities<T>, T> {
    return new UpdateRequestBuilder<
      FiscalDocumentTypesForCustomersEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `FiscalDocumentTypesForCustomersEntities`.
   * @param dataAreaId Key property. See {@link FiscalDocumentTypesForCustomersEntities.dataAreaId}.
   * @param accountCode Key property. See {@link FiscalDocumentTypesForCustomersEntities.accountCode}.
   * @param accountRelation Key property. See {@link FiscalDocumentTypesForCustomersEntities.accountRelation}.
   * @param itemType Key property. See {@link FiscalDocumentTypesForCustomersEntities.itemType}.
   * @param fiscalEstablishmentId Key property. See {@link FiscalDocumentTypesForCustomersEntities.fiscalEstablishmentId}.
   * @returns A request builder for creating requests that delete an entity of type `FiscalDocumentTypesForCustomersEntities`.
   */
  delete(
    dataAreaId: string,
    accountCode: TableGroupAll,
    accountRelation: string,
    itemType: ItemType,
    fiscalEstablishmentId: string
  ): DeleteRequestBuilder<FiscalDocumentTypesForCustomersEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FiscalDocumentTypesForCustomersEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FiscalDocumentTypesForCustomersEntities` by taking the entity as a parameter.
   */
  delete(
    entity: FiscalDocumentTypesForCustomersEntities<T>
  ): DeleteRequestBuilder<FiscalDocumentTypesForCustomersEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    accountCode?: TableGroupAll,
    accountRelation?: string,
    itemType?: ItemType,
    fiscalEstablishmentId?: string
  ): DeleteRequestBuilder<FiscalDocumentTypesForCustomersEntities<T>, T> {
    return new DeleteRequestBuilder<
      FiscalDocumentTypesForCustomersEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof FiscalDocumentTypesForCustomersEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AccountCode: accountCode!,
            AccountRelation: accountRelation!,
            ItemType: itemType!,
            FiscalEstablishmentId: fiscalEstablishmentId!
          }
    );
  }
}
