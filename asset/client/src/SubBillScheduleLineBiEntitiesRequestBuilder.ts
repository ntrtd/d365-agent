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
import { SubBillScheduleLineBiEntities } from './SubBillScheduleLineBiEntities';

/**
 * Request builder class for operations supported on the {@link SubBillScheduleLineBiEntities} entity.
 */
export class SubBillScheduleLineBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillScheduleLineBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillScheduleLineBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillScheduleLineBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<SubBillScheduleLineBiEntities<T>, T> {
    return new GetAllRequestBuilder<SubBillScheduleLineBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SubBillScheduleLineBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillScheduleLineBiEntities`.
   */
  create(
    entity: SubBillScheduleLineBiEntities<T>
  ): CreateRequestBuilder<SubBillScheduleLineBiEntities<T>, T> {
    return new CreateRequestBuilder<SubBillScheduleLineBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SubBillScheduleLineBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillScheduleLineBiEntities.dataAreaId}.
   * @param lineNum Key property. See {@link SubBillScheduleLineBiEntities.lineNum}.
   * @param subBillBillingScheduleNumber Key property. See {@link SubBillScheduleLineBiEntities.subBillBillingScheduleNumber}.
   * @returns A request builder for creating requests to retrieve one `SubBillScheduleLineBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>,
    subBillBillingScheduleNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SubBillScheduleLineBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<SubBillScheduleLineBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LineNum: lineNum,
        SubBillBillingScheduleNumber: subBillBillingScheduleNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillScheduleLineBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillScheduleLineBiEntities`.
   */
  update(
    entity: SubBillScheduleLineBiEntities<T>
  ): UpdateRequestBuilder<SubBillScheduleLineBiEntities<T>, T> {
    return new UpdateRequestBuilder<SubBillScheduleLineBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillScheduleLineBiEntities`.
   * @param dataAreaId Key property. See {@link SubBillScheduleLineBiEntities.dataAreaId}.
   * @param lineNum Key property. See {@link SubBillScheduleLineBiEntities.lineNum}.
   * @param subBillBillingScheduleNumber Key property. See {@link SubBillScheduleLineBiEntities.subBillBillingScheduleNumber}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillScheduleLineBiEntities`.
   */
  delete(
    dataAreaId: string,
    lineNum: BigNumber,
    subBillBillingScheduleNumber: string
  ): DeleteRequestBuilder<SubBillScheduleLineBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillScheduleLineBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillScheduleLineBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillScheduleLineBiEntities<T>
  ): DeleteRequestBuilder<SubBillScheduleLineBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    lineNum?: BigNumber,
    subBillBillingScheduleNumber?: string
  ): DeleteRequestBuilder<SubBillScheduleLineBiEntities<T>, T> {
    return new DeleteRequestBuilder<SubBillScheduleLineBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillScheduleLineBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LineNum: lineNum!,
            SubBillBillingScheduleNumber: subBillBillingScheduleNumber!
          }
    );
  }
}
