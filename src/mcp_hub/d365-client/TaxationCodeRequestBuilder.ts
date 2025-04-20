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
import { TaxationCode } from './TaxationCode';
import { TaxTypeBr } from './TaxTypeBr';
import { TaxFiscalValueBr } from './TaxFiscalValueBr';

/**
 * Request builder class for operations supported on the {@link TaxationCode} entity.
 */
export class TaxationCodeRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxationCode<T>, T> {
  /**
   * Returns a request builder for querying all `TaxationCode` entities.
   * @returns A request builder for creating requests to retrieve all `TaxationCode` entities.
   */
  getAll(): GetAllRequestBuilder<TaxationCode<T>, T> {
    return new GetAllRequestBuilder<TaxationCode<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TaxationCode` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxationCode`.
   */
  create(entity: TaxationCode<T>): CreateRequestBuilder<TaxationCode<T>, T> {
    return new CreateRequestBuilder<TaxationCode<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `TaxationCode` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxationCode.dataAreaId}.
   * @param taxType Key property. See {@link TaxationCode.taxType}.
   * @param taxationCode Key property. See {@link TaxationCode.taxationCode}.
   * @param fiscalValue Key property. See {@link TaxationCode.fiscalValue}.
   * @returns A request builder for creating requests to retrieve one `TaxationCode` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    taxType: DeserializedType<T, 'Microsoft.Dynamics.DataEntities.TaxType_BR'>,
    taxationCode: DeserializedType<T, 'Edm.String'>,
    fiscalValue: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TaxFiscalValue_BR'
    >
  ): GetByKeyRequestBuilder<TaxationCode<T>, T> {
    return new GetByKeyRequestBuilder<TaxationCode<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      TaxType: taxType,
      TaxationCode: taxationCode,
      FiscalValue: fiscalValue
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TaxationCode`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxationCode`.
   */
  update(entity: TaxationCode<T>): UpdateRequestBuilder<TaxationCode<T>, T> {
    return new UpdateRequestBuilder<TaxationCode<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxationCode`.
   * @param dataAreaId Key property. See {@link TaxationCode.dataAreaId}.
   * @param taxType Key property. See {@link TaxationCode.taxType}.
   * @param taxationCode Key property. See {@link TaxationCode.taxationCode}.
   * @param fiscalValue Key property. See {@link TaxationCode.fiscalValue}.
   * @returns A request builder for creating requests that delete an entity of type `TaxationCode`.
   */
  delete(
    dataAreaId: string,
    taxType: TaxTypeBr,
    taxationCode: string,
    fiscalValue: TaxFiscalValueBr
  ): DeleteRequestBuilder<TaxationCode<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxationCode`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxationCode` by taking the entity as a parameter.
   */
  delete(entity: TaxationCode<T>): DeleteRequestBuilder<TaxationCode<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    taxType?: TaxTypeBr,
    taxationCode?: string,
    fiscalValue?: TaxFiscalValueBr
  ): DeleteRequestBuilder<TaxationCode<T>, T> {
    return new DeleteRequestBuilder<TaxationCode<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxationCode
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TaxType: taxType!,
            TaxationCode: taxationCode!,
            FiscalValue: fiscalValue!
          }
    );
  }
}
