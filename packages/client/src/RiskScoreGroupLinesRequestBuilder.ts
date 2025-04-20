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
import { RiskScoreGroupLines } from './RiskScoreGroupLines';

/**
 * Request builder class for operations supported on the {@link RiskScoreGroupLines} entity.
 */
export class RiskScoreGroupLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RiskScoreGroupLines<T>, T> {
  /**
   * Returns a request builder for querying all `RiskScoreGroupLines` entities.
   * @returns A request builder for creating requests to retrieve all `RiskScoreGroupLines` entities.
   */
  getAll(): GetAllRequestBuilder<RiskScoreGroupLines<T>, T> {
    return new GetAllRequestBuilder<RiskScoreGroupLines<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RiskScoreGroupLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RiskScoreGroupLines`.
   */
  create(
    entity: RiskScoreGroupLines<T>
  ): CreateRequestBuilder<RiskScoreGroupLines<T>, T> {
    return new CreateRequestBuilder<RiskScoreGroupLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RiskScoreGroupLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link RiskScoreGroupLines.dataAreaId}.
   * @param groupId Key property. See {@link RiskScoreGroupLines.groupId}.
   * @param rangeFrom Key property. See {@link RiskScoreGroupLines.rangeFrom}.
   * @param rangeTo Key property. See {@link RiskScoreGroupLines.rangeTo}.
   * @param value Key property. See {@link RiskScoreGroupLines.value}.
   * @returns A request builder for creating requests to retrieve one `RiskScoreGroupLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupId: DeserializedType<T, 'Edm.String'>,
    rangeFrom: DeserializedType<T, 'Edm.Decimal'>,
    rangeTo: DeserializedType<T, 'Edm.Decimal'>,
    value: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RiskScoreGroupLines<T>, T> {
    return new GetByKeyRequestBuilder<RiskScoreGroupLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        GroupId: groupId,
        RangeFrom: rangeFrom,
        RangeTo: rangeTo,
        Value: value
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RiskScoreGroupLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RiskScoreGroupLines`.
   */
  update(
    entity: RiskScoreGroupLines<T>
  ): UpdateRequestBuilder<RiskScoreGroupLines<T>, T> {
    return new UpdateRequestBuilder<RiskScoreGroupLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RiskScoreGroupLines`.
   * @param dataAreaId Key property. See {@link RiskScoreGroupLines.dataAreaId}.
   * @param groupId Key property. See {@link RiskScoreGroupLines.groupId}.
   * @param rangeFrom Key property. See {@link RiskScoreGroupLines.rangeFrom}.
   * @param rangeTo Key property. See {@link RiskScoreGroupLines.rangeTo}.
   * @param value Key property. See {@link RiskScoreGroupLines.value}.
   * @returns A request builder for creating requests that delete an entity of type `RiskScoreGroupLines`.
   */
  delete(
    dataAreaId: string,
    groupId: string,
    rangeFrom: BigNumber,
    rangeTo: BigNumber,
    value: string
  ): DeleteRequestBuilder<RiskScoreGroupLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RiskScoreGroupLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RiskScoreGroupLines` by taking the entity as a parameter.
   */
  delete(
    entity: RiskScoreGroupLines<T>
  ): DeleteRequestBuilder<RiskScoreGroupLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupId?: string,
    rangeFrom?: BigNumber,
    rangeTo?: BigNumber,
    value?: string
  ): DeleteRequestBuilder<RiskScoreGroupLines<T>, T> {
    return new DeleteRequestBuilder<RiskScoreGroupLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RiskScoreGroupLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupId: groupId!,
            RangeFrom: rangeFrom!,
            RangeTo: rangeTo!,
            Value: value!
          }
    );
  }
}
