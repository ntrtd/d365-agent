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
import { FiscalDocumentTypesForFiscalEstablishmentEntities } from './FiscalDocumentTypesForFiscalEstablishmentEntities';
import { TableGroupAll } from './TableGroupAll';

/**
 * Request builder class for operations supported on the {@link FiscalDocumentTypesForFiscalEstablishmentEntities} entity.
 */
export class FiscalDocumentTypesForFiscalEstablishmentEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  FiscalDocumentTypesForFiscalEstablishmentEntities<T>,
  T
> {
  /**
   * Returns a request builder for querying all `FiscalDocumentTypesForFiscalEstablishmentEntities` entities.
   * @returns A request builder for creating requests to retrieve all `FiscalDocumentTypesForFiscalEstablishmentEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    FiscalDocumentTypesForFiscalEstablishmentEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      FiscalDocumentTypesForFiscalEstablishmentEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FiscalDocumentTypesForFiscalEstablishmentEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FiscalDocumentTypesForFiscalEstablishmentEntities`.
   */
  create(
    entity: FiscalDocumentTypesForFiscalEstablishmentEntities<T>
  ): CreateRequestBuilder<
    FiscalDocumentTypesForFiscalEstablishmentEntities<T>,
    T
  > {
    return new CreateRequestBuilder<
      FiscalDocumentTypesForFiscalEstablishmentEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `FiscalDocumentTypesForFiscalEstablishmentEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link FiscalDocumentTypesForFiscalEstablishmentEntities.dataAreaId}.
   * @param accountCode Key property. See {@link FiscalDocumentTypesForFiscalEstablishmentEntities.accountCode}.
   * @param accountRelation Key property. See {@link FiscalDocumentTypesForFiscalEstablishmentEntities.accountRelation}.
   * @param fiscalEstablishmentId Key property. See {@link FiscalDocumentTypesForFiscalEstablishmentEntities.fiscalEstablishmentId}.
   * @returns A request builder for creating requests to retrieve one `FiscalDocumentTypesForFiscalEstablishmentEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    accountCode: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TableGroupAll'
    >,
    accountRelation: DeserializedType<T, 'Edm.String'>,
    fiscalEstablishmentId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    FiscalDocumentTypesForFiscalEstablishmentEntities<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      FiscalDocumentTypesForFiscalEstablishmentEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      AccountCode: accountCode,
      AccountRelation: accountRelation,
      FiscalEstablishmentId: fiscalEstablishmentId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `FiscalDocumentTypesForFiscalEstablishmentEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FiscalDocumentTypesForFiscalEstablishmentEntities`.
   */
  update(
    entity: FiscalDocumentTypesForFiscalEstablishmentEntities<T>
  ): UpdateRequestBuilder<
    FiscalDocumentTypesForFiscalEstablishmentEntities<T>,
    T
  > {
    return new UpdateRequestBuilder<
      FiscalDocumentTypesForFiscalEstablishmentEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `FiscalDocumentTypesForFiscalEstablishmentEntities`.
   * @param dataAreaId Key property. See {@link FiscalDocumentTypesForFiscalEstablishmentEntities.dataAreaId}.
   * @param accountCode Key property. See {@link FiscalDocumentTypesForFiscalEstablishmentEntities.accountCode}.
   * @param accountRelation Key property. See {@link FiscalDocumentTypesForFiscalEstablishmentEntities.accountRelation}.
   * @param fiscalEstablishmentId Key property. See {@link FiscalDocumentTypesForFiscalEstablishmentEntities.fiscalEstablishmentId}.
   * @returns A request builder for creating requests that delete an entity of type `FiscalDocumentTypesForFiscalEstablishmentEntities`.
   */
  delete(
    dataAreaId: string,
    accountCode: TableGroupAll,
    accountRelation: string,
    fiscalEstablishmentId: string
  ): DeleteRequestBuilder<
    FiscalDocumentTypesForFiscalEstablishmentEntities<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `FiscalDocumentTypesForFiscalEstablishmentEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FiscalDocumentTypesForFiscalEstablishmentEntities` by taking the entity as a parameter.
   */
  delete(
    entity: FiscalDocumentTypesForFiscalEstablishmentEntities<T>
  ): DeleteRequestBuilder<
    FiscalDocumentTypesForFiscalEstablishmentEntities<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    accountCode?: TableGroupAll,
    accountRelation?: string,
    fiscalEstablishmentId?: string
  ): DeleteRequestBuilder<
    FiscalDocumentTypesForFiscalEstablishmentEntities<T>,
    T
  > {
    return new DeleteRequestBuilder<
      FiscalDocumentTypesForFiscalEstablishmentEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      FiscalDocumentTypesForFiscalEstablishmentEntities
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
