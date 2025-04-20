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
import { TaxesMatrices } from './TaxesMatrices';
import { CustVendTypeBr } from './CustVendTypeBr';

/**
 * Request builder class for operations supported on the {@link TaxesMatrices} entity.
 */
export class TaxesMatricesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxesMatrices<T>, T> {
  /**
   * Returns a request builder for querying all `TaxesMatrices` entities.
   * @returns A request builder for creating requests to retrieve all `TaxesMatrices` entities.
   */
  getAll(): GetAllRequestBuilder<TaxesMatrices<T>, T> {
    return new GetAllRequestBuilder<TaxesMatrices<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TaxesMatrices` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxesMatrices`.
   */
  create(entity: TaxesMatrices<T>): CreateRequestBuilder<TaxesMatrices<T>, T> {
    return new CreateRequestBuilder<TaxesMatrices<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TaxesMatrices` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxesMatrices.dataAreaId}.
   * @param fiscalEstablishmentGroupId Key property. See {@link TaxesMatrices.fiscalEstablishmentGroupId}.
   * @param cfopGroupId Key property. See {@link TaxesMatrices.cfopGroupId}.
   * @param type Key property. See {@link TaxesMatrices.type}.
   * @param accountRelation Key property. See {@link TaxesMatrices.accountRelation}.
   * @param itemRelation Key property. See {@link TaxesMatrices.itemRelation}.
   * @returns A request builder for creating requests to retrieve one `TaxesMatrices` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    fiscalEstablishmentGroupId: DeserializedType<T, 'Edm.String'>,
    cfopGroupId: DeserializedType<T, 'Edm.String'>,
    type: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.CustVendType_BR'
    >,
    accountRelation: DeserializedType<T, 'Edm.String'>,
    itemRelation: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TaxesMatrices<T>, T> {
    return new GetByKeyRequestBuilder<TaxesMatrices<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      FiscalEstablishmentGroupId: fiscalEstablishmentGroupId,
      CFOPGroupId: cfopGroupId,
      Type: type,
      AccountRelation: accountRelation,
      ItemRelation: itemRelation
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TaxesMatrices`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxesMatrices`.
   */
  update(entity: TaxesMatrices<T>): UpdateRequestBuilder<TaxesMatrices<T>, T> {
    return new UpdateRequestBuilder<TaxesMatrices<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxesMatrices`.
   * @param dataAreaId Key property. See {@link TaxesMatrices.dataAreaId}.
   * @param fiscalEstablishmentGroupId Key property. See {@link TaxesMatrices.fiscalEstablishmentGroupId}.
   * @param cfopGroupId Key property. See {@link TaxesMatrices.cfopGroupId}.
   * @param type Key property. See {@link TaxesMatrices.type}.
   * @param accountRelation Key property. See {@link TaxesMatrices.accountRelation}.
   * @param itemRelation Key property. See {@link TaxesMatrices.itemRelation}.
   * @returns A request builder for creating requests that delete an entity of type `TaxesMatrices`.
   */
  delete(
    dataAreaId: string,
    fiscalEstablishmentGroupId: string,
    cfopGroupId: string,
    type: CustVendTypeBr,
    accountRelation: string,
    itemRelation: string
  ): DeleteRequestBuilder<TaxesMatrices<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxesMatrices`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxesMatrices` by taking the entity as a parameter.
   */
  delete(entity: TaxesMatrices<T>): DeleteRequestBuilder<TaxesMatrices<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    fiscalEstablishmentGroupId?: string,
    cfopGroupId?: string,
    type?: CustVendTypeBr,
    accountRelation?: string,
    itemRelation?: string
  ): DeleteRequestBuilder<TaxesMatrices<T>, T> {
    return new DeleteRequestBuilder<TaxesMatrices<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxesMatrices
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FiscalEstablishmentGroupId: fiscalEstablishmentGroupId!,
            CFOPGroupId: cfopGroupId!,
            Type: type!,
            AccountRelation: accountRelation!,
            ItemRelation: itemRelation!
          }
    );
  }
}
