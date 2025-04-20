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
import { InventTransferLineBiEntities } from './InventTransferLineBiEntities';

/**
 * Request builder class for operations supported on the {@link InventTransferLineBiEntities} entity.
 */
export class InventTransferLineBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventTransferLineBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `InventTransferLineBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `InventTransferLineBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<InventTransferLineBiEntities<T>, T> {
    return new GetAllRequestBuilder<InventTransferLineBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InventTransferLineBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventTransferLineBiEntities`.
   */
  create(
    entity: InventTransferLineBiEntities<T>
  ): CreateRequestBuilder<InventTransferLineBiEntities<T>, T> {
    return new CreateRequestBuilder<InventTransferLineBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventTransferLineBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventTransferLineBiEntities.dataAreaId}.
   * @param transferId Key property. See {@link InventTransferLineBiEntities.transferId}.
   * @param lineNum Key property. See {@link InventTransferLineBiEntities.lineNum}.
   * @returns A request builder for creating requests to retrieve one `InventTransferLineBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    transferId: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<InventTransferLineBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<InventTransferLineBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TransferId: transferId,
        LineNum: lineNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventTransferLineBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventTransferLineBiEntities`.
   */
  update(
    entity: InventTransferLineBiEntities<T>
  ): UpdateRequestBuilder<InventTransferLineBiEntities<T>, T> {
    return new UpdateRequestBuilder<InventTransferLineBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventTransferLineBiEntities`.
   * @param dataAreaId Key property. See {@link InventTransferLineBiEntities.dataAreaId}.
   * @param transferId Key property. See {@link InventTransferLineBiEntities.transferId}.
   * @param lineNum Key property. See {@link InventTransferLineBiEntities.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `InventTransferLineBiEntities`.
   */
  delete(
    dataAreaId: string,
    transferId: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<InventTransferLineBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventTransferLineBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventTransferLineBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: InventTransferLineBiEntities<T>
  ): DeleteRequestBuilder<InventTransferLineBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    transferId?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<InventTransferLineBiEntities<T>, T> {
    return new DeleteRequestBuilder<InventTransferLineBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventTransferLineBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TransferId: transferId!,
            LineNum: lineNum!
          }
    );
  }
}
