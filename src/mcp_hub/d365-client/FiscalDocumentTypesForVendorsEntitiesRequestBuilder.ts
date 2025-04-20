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
import { FiscalDocumentTypesForVendorsEntities } from './FiscalDocumentTypesForVendorsEntities';
import { TableGroupAll } from './TableGroupAll';

/**
 * Request builder class for operations supported on the {@link FiscalDocumentTypesForVendorsEntities} entity.
 */
export class FiscalDocumentTypesForVendorsEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FiscalDocumentTypesForVendorsEntities<T>, T> {
  /**
   * Returns a request builder for querying all `FiscalDocumentTypesForVendorsEntities` entities.
   * @returns A request builder for creating requests to retrieve all `FiscalDocumentTypesForVendorsEntities` entities.
   */
  getAll(): GetAllRequestBuilder<FiscalDocumentTypesForVendorsEntities<T>, T> {
    return new GetAllRequestBuilder<
      FiscalDocumentTypesForVendorsEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FiscalDocumentTypesForVendorsEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FiscalDocumentTypesForVendorsEntities`.
   */
  create(
    entity: FiscalDocumentTypesForVendorsEntities<T>
  ): CreateRequestBuilder<FiscalDocumentTypesForVendorsEntities<T>, T> {
    return new CreateRequestBuilder<
      FiscalDocumentTypesForVendorsEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `FiscalDocumentTypesForVendorsEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link FiscalDocumentTypesForVendorsEntities.dataAreaId}.
   * @param accountCode Key property. See {@link FiscalDocumentTypesForVendorsEntities.accountCode}.
   * @param accountRelation Key property. See {@link FiscalDocumentTypesForVendorsEntities.accountRelation}.
   * @param fiscalEstablishmentId Key property. See {@link FiscalDocumentTypesForVendorsEntities.fiscalEstablishmentId}.
   * @returns A request builder for creating requests to retrieve one `FiscalDocumentTypesForVendorsEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    accountCode: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TableGroupAll'
    >,
    accountRelation: DeserializedType<T, 'Edm.String'>,
    fiscalEstablishmentId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FiscalDocumentTypesForVendorsEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      FiscalDocumentTypesForVendorsEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      AccountCode: accountCode,
      AccountRelation: accountRelation,
      FiscalEstablishmentId: fiscalEstablishmentId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `FiscalDocumentTypesForVendorsEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FiscalDocumentTypesForVendorsEntities`.
   */
  update(
    entity: FiscalDocumentTypesForVendorsEntities<T>
  ): UpdateRequestBuilder<FiscalDocumentTypesForVendorsEntities<T>, T> {
    return new UpdateRequestBuilder<
      FiscalDocumentTypesForVendorsEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `FiscalDocumentTypesForVendorsEntities`.
   * @param dataAreaId Key property. See {@link FiscalDocumentTypesForVendorsEntities.dataAreaId}.
   * @param accountCode Key property. See {@link FiscalDocumentTypesForVendorsEntities.accountCode}.
   * @param accountRelation Key property. See {@link FiscalDocumentTypesForVendorsEntities.accountRelation}.
   * @param fiscalEstablishmentId Key property. See {@link FiscalDocumentTypesForVendorsEntities.fiscalEstablishmentId}.
   * @returns A request builder for creating requests that delete an entity of type `FiscalDocumentTypesForVendorsEntities`.
   */
  delete(
    dataAreaId: string,
    accountCode: TableGroupAll,
    accountRelation: string,
    fiscalEstablishmentId: string
  ): DeleteRequestBuilder<FiscalDocumentTypesForVendorsEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FiscalDocumentTypesForVendorsEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FiscalDocumentTypesForVendorsEntities` by taking the entity as a parameter.
   */
  delete(
    entity: FiscalDocumentTypesForVendorsEntities<T>
  ): DeleteRequestBuilder<FiscalDocumentTypesForVendorsEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    accountCode?: TableGroupAll,
    accountRelation?: string,
    fiscalEstablishmentId?: string
  ): DeleteRequestBuilder<FiscalDocumentTypesForVendorsEntities<T>, T> {
    return new DeleteRequestBuilder<
      FiscalDocumentTypesForVendorsEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof FiscalDocumentTypesForVendorsEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AccountCode: accountCode!,
            AccountRelation: accountRelation!,
            FiscalEstablishmentId: fiscalEstablishmentId!
          }
    );
  }
}
