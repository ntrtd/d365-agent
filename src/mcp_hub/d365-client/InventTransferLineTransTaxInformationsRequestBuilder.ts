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
import { InventTransferLineTransTaxInformations } from './InventTransferLineTransTaxInformations';
import { TransTaxInformationTypeIn } from './TransTaxInformationTypeIn';

/**
 * Request builder class for operations supported on the {@link InventTransferLineTransTaxInformations} entity.
 */
export class InventTransferLineTransTaxInformationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventTransferLineTransTaxInformations<T>, T> {
  /**
   * Returns a request builder for querying all `InventTransferLineTransTaxInformations` entities.
   * @returns A request builder for creating requests to retrieve all `InventTransferLineTransTaxInformations` entities.
   */
  getAll(): GetAllRequestBuilder<InventTransferLineTransTaxInformations<T>, T> {
    return new GetAllRequestBuilder<
      InventTransferLineTransTaxInformations<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `InventTransferLineTransTaxInformations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventTransferLineTransTaxInformations`.
   */
  create(
    entity: InventTransferLineTransTaxInformations<T>
  ): CreateRequestBuilder<InventTransferLineTransTaxInformations<T>, T> {
    return new CreateRequestBuilder<
      InventTransferLineTransTaxInformations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `InventTransferLineTransTaxInformations` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventTransferLineTransTaxInformations.dataAreaId}.
   * @param transferId Key property. See {@link InventTransferLineTransTaxInformations.transferId}.
   * @param lineNum Key property. See {@link InventTransferLineTransTaxInformations.lineNum}.
   * @param type Key property. See {@link InventTransferLineTransTaxInformations.type}.
   * @returns A request builder for creating requests to retrieve one `InventTransferLineTransTaxInformations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    transferId: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>,
    type: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TransTaxInformationType_IN'
    >
  ): GetByKeyRequestBuilder<InventTransferLineTransTaxInformations<T>, T> {
    return new GetByKeyRequestBuilder<
      InventTransferLineTransTaxInformations<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      TransferId: transferId,
      LineNum: lineNum,
      Type: type
    });
  }

  /**
   * Returns a request builder for updating an entity of type `InventTransferLineTransTaxInformations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventTransferLineTransTaxInformations`.
   */
  update(
    entity: InventTransferLineTransTaxInformations<T>
  ): UpdateRequestBuilder<InventTransferLineTransTaxInformations<T>, T> {
    return new UpdateRequestBuilder<
      InventTransferLineTransTaxInformations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `InventTransferLineTransTaxInformations`.
   * @param dataAreaId Key property. See {@link InventTransferLineTransTaxInformations.dataAreaId}.
   * @param transferId Key property. See {@link InventTransferLineTransTaxInformations.transferId}.
   * @param lineNum Key property. See {@link InventTransferLineTransTaxInformations.lineNum}.
   * @param type Key property. See {@link InventTransferLineTransTaxInformations.type}.
   * @returns A request builder for creating requests that delete an entity of type `InventTransferLineTransTaxInformations`.
   */
  delete(
    dataAreaId: string,
    transferId: string,
    lineNum: BigNumber,
    type: TransTaxInformationTypeIn
  ): DeleteRequestBuilder<InventTransferLineTransTaxInformations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventTransferLineTransTaxInformations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventTransferLineTransTaxInformations` by taking the entity as a parameter.
   */
  delete(
    entity: InventTransferLineTransTaxInformations<T>
  ): DeleteRequestBuilder<InventTransferLineTransTaxInformations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    transferId?: string,
    lineNum?: BigNumber,
    type?: TransTaxInformationTypeIn
  ): DeleteRequestBuilder<InventTransferLineTransTaxInformations<T>, T> {
    return new DeleteRequestBuilder<
      InventTransferLineTransTaxInformations<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventTransferLineTransTaxInformations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TransferId: transferId!,
            LineNum: lineNum!,
            Type: type!
          }
    );
  }
}
