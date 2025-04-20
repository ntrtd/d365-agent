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
import { SubBillEscalationTables } from './SubBillEscalationTables';
import { NoYes } from './NoYes';

/**
 * Request builder class for operations supported on the {@link SubBillEscalationTables} entity.
 */
export class SubBillEscalationTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillEscalationTables<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillEscalationTables` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillEscalationTables` entities.
   */
  getAll(): GetAllRequestBuilder<SubBillEscalationTables<T>, T> {
    return new GetAllRequestBuilder<SubBillEscalationTables<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SubBillEscalationTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillEscalationTables`.
   */
  create(
    entity: SubBillEscalationTables<T>
  ): CreateRequestBuilder<SubBillEscalationTables<T>, T> {
    return new CreateRequestBuilder<SubBillEscalationTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SubBillEscalationTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillEscalationTables.dataAreaId}.
   * @param isScheduleLine Key property. See {@link SubBillEscalationTables.isScheduleLine}.
   * @param scheduleLineNum Key property. See {@link SubBillEscalationTables.scheduleLineNum}.
   * @param escalationLineNum Key property. See {@link SubBillEscalationTables.escalationLineNum}.
   * @param scheduleNumber Key property. See {@link SubBillEscalationTables.scheduleNumber}.
   * @returns A request builder for creating requests to retrieve one `SubBillEscalationTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    isScheduleLine: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.NoYes'
    >,
    scheduleLineNum: DeserializedType<T, 'Edm.Decimal'>,
    escalationLineNum: DeserializedType<T, 'Edm.Decimal'>,
    scheduleNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SubBillEscalationTables<T>, T> {
    return new GetByKeyRequestBuilder<SubBillEscalationTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        IsScheduleLine: isScheduleLine,
        ScheduleLineNum: scheduleLineNum,
        EscalationLineNum: escalationLineNum,
        ScheduleNumber: scheduleNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillEscalationTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillEscalationTables`.
   */
  update(
    entity: SubBillEscalationTables<T>
  ): UpdateRequestBuilder<SubBillEscalationTables<T>, T> {
    return new UpdateRequestBuilder<SubBillEscalationTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillEscalationTables`.
   * @param dataAreaId Key property. See {@link SubBillEscalationTables.dataAreaId}.
   * @param isScheduleLine Key property. See {@link SubBillEscalationTables.isScheduleLine}.
   * @param scheduleLineNum Key property. See {@link SubBillEscalationTables.scheduleLineNum}.
   * @param escalationLineNum Key property. See {@link SubBillEscalationTables.escalationLineNum}.
   * @param scheduleNumber Key property. See {@link SubBillEscalationTables.scheduleNumber}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillEscalationTables`.
   */
  delete(
    dataAreaId: string,
    isScheduleLine: NoYes,
    scheduleLineNum: BigNumber,
    escalationLineNum: BigNumber,
    scheduleNumber: string
  ): DeleteRequestBuilder<SubBillEscalationTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillEscalationTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillEscalationTables` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillEscalationTables<T>
  ): DeleteRequestBuilder<SubBillEscalationTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    isScheduleLine?: NoYes,
    scheduleLineNum?: BigNumber,
    escalationLineNum?: BigNumber,
    scheduleNumber?: string
  ): DeleteRequestBuilder<SubBillEscalationTables<T>, T> {
    return new DeleteRequestBuilder<SubBillEscalationTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillEscalationTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            IsScheduleLine: isScheduleLine!,
            ScheduleLineNum: scheduleLineNum!,
            EscalationLineNum: escalationLineNum!,
            ScheduleNumber: scheduleNumber!
          }
    );
  }
}
