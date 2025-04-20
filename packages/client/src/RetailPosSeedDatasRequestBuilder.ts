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
import { RetailPosSeedDatas } from './RetailPosSeedDatas';
import { RetailPosSeedDataType } from './RetailPosSeedDataType';

/**
 * Request builder class for operations supported on the {@link RetailPosSeedDatas} entity.
 */
export class RetailPosSeedDatasRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailPosSeedDatas<T>, T> {
  /**
   * Returns a request builder for querying all `RetailPosSeedDatas` entities.
   * @returns A request builder for creating requests to retrieve all `RetailPosSeedDatas` entities.
   */
  getAll(): GetAllRequestBuilder<RetailPosSeedDatas<T>, T> {
    return new GetAllRequestBuilder<RetailPosSeedDatas<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailPosSeedDatas` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailPosSeedDatas`.
   */
  create(
    entity: RetailPosSeedDatas<T>
  ): CreateRequestBuilder<RetailPosSeedDatas<T>, T> {
    return new CreateRequestBuilder<RetailPosSeedDatas<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailPosSeedDatas` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailPosSeedDatas.dataAreaId}.
   * @param dataType Key property. See {@link RetailPosSeedDatas.dataType}.
   * @param storeNumber Key property. See {@link RetailPosSeedDatas.storeNumber}.
   * @param terminalId Key property. See {@link RetailPosSeedDatas.terminalId}.
   * @returns A request builder for creating requests to retrieve one `RetailPosSeedDatas` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    dataType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RetailPOSSeedDataType'
    >,
    storeNumber: DeserializedType<T, 'Edm.String'>,
    terminalId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailPosSeedDatas<T>, T> {
    return new GetByKeyRequestBuilder<RetailPosSeedDatas<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        DataType: dataType,
        StoreNumber: storeNumber,
        TerminalID: terminalId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailPosSeedDatas`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailPosSeedDatas`.
   */
  update(
    entity: RetailPosSeedDatas<T>
  ): UpdateRequestBuilder<RetailPosSeedDatas<T>, T> {
    return new UpdateRequestBuilder<RetailPosSeedDatas<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailPosSeedDatas`.
   * @param dataAreaId Key property. See {@link RetailPosSeedDatas.dataAreaId}.
   * @param dataType Key property. See {@link RetailPosSeedDatas.dataType}.
   * @param storeNumber Key property. See {@link RetailPosSeedDatas.storeNumber}.
   * @param terminalId Key property. See {@link RetailPosSeedDatas.terminalId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailPosSeedDatas`.
   */
  delete(
    dataAreaId: string,
    dataType: RetailPosSeedDataType,
    storeNumber: string,
    terminalId: string
  ): DeleteRequestBuilder<RetailPosSeedDatas<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailPosSeedDatas`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailPosSeedDatas` by taking the entity as a parameter.
   */
  delete(
    entity: RetailPosSeedDatas<T>
  ): DeleteRequestBuilder<RetailPosSeedDatas<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    dataType?: RetailPosSeedDataType,
    storeNumber?: string,
    terminalId?: string
  ): DeleteRequestBuilder<RetailPosSeedDatas<T>, T> {
    return new DeleteRequestBuilder<RetailPosSeedDatas<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailPosSeedDatas
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DataType: dataType!,
            StoreNumber: storeNumber!,
            TerminalID: terminalId!
          }
    );
  }
}
