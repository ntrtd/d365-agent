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
import { DimAttributeLedgerFunds_Psn } from './DimAttributeLedgerFunds_Psn';

/**
 * Request builder class for operations supported on the {@link DimAttributeLedgerFunds_Psn} entity.
 */
export class DimAttributeLedgerFunds_PsnRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DimAttributeLedgerFunds_Psn<T>, T> {
  /**
   * Returns a request builder for querying all `DimAttributeLedgerFunds_Psn` entities.
   * @returns A request builder for creating requests to retrieve all `DimAttributeLedgerFunds_Psn` entities.
   */
  getAll(): GetAllRequestBuilder<DimAttributeLedgerFunds_Psn<T>, T> {
    return new GetAllRequestBuilder<DimAttributeLedgerFunds_Psn<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DimAttributeLedgerFunds_Psn` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DimAttributeLedgerFunds_Psn`.
   */
  create(
    entity: DimAttributeLedgerFunds_Psn<T>
  ): CreateRequestBuilder<DimAttributeLedgerFunds_Psn<T>, T> {
    return new CreateRequestBuilder<DimAttributeLedgerFunds_Psn<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DimAttributeLedgerFunds_Psn` entity based on its keys.
   * @param dataAreaId Key property. See {@link DimAttributeLedgerFunds_Psn.dataAreaId}.
   * @param value Key property. See {@link DimAttributeLedgerFunds_Psn.value}.
   * @returns A request builder for creating requests to retrieve one `DimAttributeLedgerFunds_Psn` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    value: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DimAttributeLedgerFunds_Psn<T>, T> {
    return new GetByKeyRequestBuilder<DimAttributeLedgerFunds_Psn<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Value: value
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DimAttributeLedgerFunds_Psn`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DimAttributeLedgerFunds_Psn`.
   */
  update(
    entity: DimAttributeLedgerFunds_Psn<T>
  ): UpdateRequestBuilder<DimAttributeLedgerFunds_Psn<T>, T> {
    return new UpdateRequestBuilder<DimAttributeLedgerFunds_Psn<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DimAttributeLedgerFunds_Psn`.
   * @param dataAreaId Key property. See {@link DimAttributeLedgerFunds_Psn.dataAreaId}.
   * @param value Key property. See {@link DimAttributeLedgerFunds_Psn.value}.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeLedgerFunds_Psn`.
   */
  delete(
    dataAreaId: string,
    value: string
  ): DeleteRequestBuilder<DimAttributeLedgerFunds_Psn<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DimAttributeLedgerFunds_Psn`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeLedgerFunds_Psn` by taking the entity as a parameter.
   */
  delete(
    entity: DimAttributeLedgerFunds_Psn<T>
  ): DeleteRequestBuilder<DimAttributeLedgerFunds_Psn<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    value?: string
  ): DeleteRequestBuilder<DimAttributeLedgerFunds_Psn<T>, T> {
    return new DeleteRequestBuilder<DimAttributeLedgerFunds_Psn<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DimAttributeLedgerFunds_Psn
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Value: value!
          }
    );
  }
}
