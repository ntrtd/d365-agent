/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { TransferLineFiscalInfo } from './TransferLineFiscalInfo';

/**
 * Request builder class for operations supported on the {@link TransferLineFiscalInfo} entity.
 */
export class TransferLineFiscalInfoRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TransferLineFiscalInfo<T>, T> {
  /**
   * Returns a request builder for querying all `TransferLineFiscalInfo` entities.
   * @returns A request builder for creating requests to retrieve all `TransferLineFiscalInfo` entities.
   */
  getAll(): GetAllRequestBuilder<TransferLineFiscalInfo<T>, T> {
    return new GetAllRequestBuilder<TransferLineFiscalInfo<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TransferLineFiscalInfo` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TransferLineFiscalInfo`.
   */
  create(
    entity: TransferLineFiscalInfo<T>
  ): CreateRequestBuilder<TransferLineFiscalInfo<T>, T> {
    return new CreateRequestBuilder<TransferLineFiscalInfo<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TransferLineFiscalInfo` entity based on its keys.
   * @param dataAreaId Key property. See {@link TransferLineFiscalInfo.dataAreaId}.
   * @param transferId Key property. See {@link TransferLineFiscalInfo.transferId}.
   * @param lineNum Key property. See {@link TransferLineFiscalInfo.lineNum}.
   * @returns A request builder for creating requests to retrieve one `TransferLineFiscalInfo` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    transferId: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<TransferLineFiscalInfo<T>, T> {
    return new GetByKeyRequestBuilder<TransferLineFiscalInfo<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TransferId: transferId,
        LineNum: lineNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TransferLineFiscalInfo`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TransferLineFiscalInfo`.
   */
  update(
    entity: TransferLineFiscalInfo<T>
  ): UpdateRequestBuilder<TransferLineFiscalInfo<T>, T> {
    return new UpdateRequestBuilder<TransferLineFiscalInfo<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TransferLineFiscalInfo`.
   * @param dataAreaId Key property. See {@link TransferLineFiscalInfo.dataAreaId}.
   * @param transferId Key property. See {@link TransferLineFiscalInfo.transferId}.
   * @param lineNum Key property. See {@link TransferLineFiscalInfo.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `TransferLineFiscalInfo`.
   */
  delete(
    dataAreaId: string,
    transferId: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<TransferLineFiscalInfo<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TransferLineFiscalInfo`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TransferLineFiscalInfo` by taking the entity as a parameter.
   */
  delete(
    entity: TransferLineFiscalInfo<T>
  ): DeleteRequestBuilder<TransferLineFiscalInfo<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    transferId?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<TransferLineFiscalInfo<T>, T> {
    return new DeleteRequestBuilder<TransferLineFiscalInfo<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TransferLineFiscalInfo
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TransferId: transferId!,
            LineNum: lineNum!
          }
    );
  }
}
