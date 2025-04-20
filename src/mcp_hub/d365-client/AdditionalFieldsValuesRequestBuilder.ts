/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { AdditionalFieldsValues } from './AdditionalFieldsValues';
import { EmAccountType } from './EmAccountType';
import { TableGroupAll } from './TableGroupAll';

/**
 * Request builder class for operations supported on the {@link AdditionalFieldsValues} entity.
 */
export class AdditionalFieldsValuesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AdditionalFieldsValues<T>, T> {
  /**
   * Returns a request builder for querying all `AdditionalFieldsValues` entities.
   * @returns A request builder for creating requests to retrieve all `AdditionalFieldsValues` entities.
   */
  getAll(): GetAllRequestBuilder<AdditionalFieldsValues<T>, T> {
    return new GetAllRequestBuilder<AdditionalFieldsValues<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AdditionalFieldsValues` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AdditionalFieldsValues`.
   */
  create(
    entity: AdditionalFieldsValues<T>
  ): CreateRequestBuilder<AdditionalFieldsValues<T>, T> {
    return new CreateRequestBuilder<AdditionalFieldsValues<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AdditionalFieldsValues` entity based on its keys.
   * @param dataAreaId Key property. See {@link AdditionalFieldsValues.dataAreaId}.
   * @param fieldName Key property. See {@link AdditionalFieldsValues.fieldName}.
   * @param fieldValue Key property. See {@link AdditionalFieldsValues.fieldValue}.
   * @param accountType Key property. See {@link AdditionalFieldsValues.accountType}.
   * @param accountCode Key property. See {@link AdditionalFieldsValues.accountCode}.
   * @param accountRelation Key property. See {@link AdditionalFieldsValues.accountRelation}.
   * @param effective Key property. See {@link AdditionalFieldsValues.effective}.
   * @param expiration Key property. See {@link AdditionalFieldsValues.expiration}.
   * @returns A request builder for creating requests to retrieve one `AdditionalFieldsValues` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    fieldName: DeserializedType<T, 'Edm.String'>,
    fieldValue: DeserializedType<T, 'Edm.String'>,
    accountType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.EMAccountType'
    >,
    accountCode: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TableGroupAll'
    >,
    accountRelation: DeserializedType<T, 'Edm.String'>,
    effective: DeserializedType<T, 'Edm.DateTimeOffset'>,
    expiration: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<AdditionalFieldsValues<T>, T> {
    return new GetByKeyRequestBuilder<AdditionalFieldsValues<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        FieldName: fieldName,
        FieldValue: fieldValue,
        AccountType: accountType,
        AccountCode: accountCode,
        AccountRelation: accountRelation,
        Effective: effective,
        Expiration: expiration
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AdditionalFieldsValues`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AdditionalFieldsValues`.
   */
  update(
    entity: AdditionalFieldsValues<T>
  ): UpdateRequestBuilder<AdditionalFieldsValues<T>, T> {
    return new UpdateRequestBuilder<AdditionalFieldsValues<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AdditionalFieldsValues`.
   * @param dataAreaId Key property. See {@link AdditionalFieldsValues.dataAreaId}.
   * @param fieldName Key property. See {@link AdditionalFieldsValues.fieldName}.
   * @param fieldValue Key property. See {@link AdditionalFieldsValues.fieldValue}.
   * @param accountType Key property. See {@link AdditionalFieldsValues.accountType}.
   * @param accountCode Key property. See {@link AdditionalFieldsValues.accountCode}.
   * @param accountRelation Key property. See {@link AdditionalFieldsValues.accountRelation}.
   * @param effective Key property. See {@link AdditionalFieldsValues.effective}.
   * @param expiration Key property. See {@link AdditionalFieldsValues.expiration}.
   * @returns A request builder for creating requests that delete an entity of type `AdditionalFieldsValues`.
   */
  delete(
    dataAreaId: string,
    fieldName: string,
    fieldValue: string,
    accountType: EmAccountType,
    accountCode: TableGroupAll,
    accountRelation: string,
    effective: Moment,
    expiration: Moment
  ): DeleteRequestBuilder<AdditionalFieldsValues<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AdditionalFieldsValues`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AdditionalFieldsValues` by taking the entity as a parameter.
   */
  delete(
    entity: AdditionalFieldsValues<T>
  ): DeleteRequestBuilder<AdditionalFieldsValues<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    fieldName?: string,
    fieldValue?: string,
    accountType?: EmAccountType,
    accountCode?: TableGroupAll,
    accountRelation?: string,
    effective?: Moment,
    expiration?: Moment
  ): DeleteRequestBuilder<AdditionalFieldsValues<T>, T> {
    return new DeleteRequestBuilder<AdditionalFieldsValues<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AdditionalFieldsValues
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FieldName: fieldName!,
            FieldValue: fieldValue!,
            AccountType: accountType!,
            AccountCode: accountCode!,
            AccountRelation: accountRelation!,
            Effective: effective!,
            Expiration: expiration!
          }
    );
  }
}
