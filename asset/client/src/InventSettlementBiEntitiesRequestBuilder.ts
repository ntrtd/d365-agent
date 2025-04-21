/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { InventSettlementBiEntities } from './InventSettlementBiEntities';
import { InventSettleType } from './InventSettleType';

/**
 * Request builder class for operations supported on the {@link InventSettlementBiEntities} entity.
 */
export class InventSettlementBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventSettlementBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `InventSettlementBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `InventSettlementBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<InventSettlementBiEntities<T>, T> {
    return new GetAllRequestBuilder<InventSettlementBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InventSettlementBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventSettlementBiEntities`.
   */
  create(
    entity: InventSettlementBiEntities<T>
  ): CreateRequestBuilder<InventSettlementBiEntities<T>, T> {
    return new CreateRequestBuilder<InventSettlementBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventSettlementBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventSettlementBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link InventSettlementBiEntities.sourceKey}.
   * @param transRecId Key property. See {@link InventSettlementBiEntities.transRecId}.
   * @param settleType Key property. See {@link InventSettlementBiEntities.settleType}.
   * @param transDate Key property. See {@link InventSettlementBiEntities.transDate}.
   * @returns A request builder for creating requests to retrieve one `InventSettlementBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>,
    transRecId: DeserializedType<T, 'Edm.Int64'>,
    settleType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.InventSettleType'
    >,
    transDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<InventSettlementBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<InventSettlementBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceKey: sourceKey,
        TransRecId: transRecId,
        SettleType: settleType,
        TransDate: transDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventSettlementBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventSettlementBiEntities`.
   */
  update(
    entity: InventSettlementBiEntities<T>
  ): UpdateRequestBuilder<InventSettlementBiEntities<T>, T> {
    return new UpdateRequestBuilder<InventSettlementBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventSettlementBiEntities`.
   * @param dataAreaId Key property. See {@link InventSettlementBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link InventSettlementBiEntities.sourceKey}.
   * @param transRecId Key property. See {@link InventSettlementBiEntities.transRecId}.
   * @param settleType Key property. See {@link InventSettlementBiEntities.settleType}.
   * @param transDate Key property. See {@link InventSettlementBiEntities.transDate}.
   * @returns A request builder for creating requests that delete an entity of type `InventSettlementBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber,
    transRecId: BigNumber,
    settleType: InventSettleType,
    transDate: Moment
  ): DeleteRequestBuilder<InventSettlementBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventSettlementBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventSettlementBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: InventSettlementBiEntities<T>
  ): DeleteRequestBuilder<InventSettlementBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber,
    transRecId?: BigNumber,
    settleType?: InventSettleType,
    transDate?: Moment
  ): DeleteRequestBuilder<InventSettlementBiEntities<T>, T> {
    return new DeleteRequestBuilder<InventSettlementBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventSettlementBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!,
            TransRecId: transRecId!,
            SettleType: settleType!,
            TransDate: transDate!
          }
    );
  }
}
