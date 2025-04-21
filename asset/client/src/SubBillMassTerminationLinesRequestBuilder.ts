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
import { SubBillMassTerminationLines } from './SubBillMassTerminationLines';

/**
 * Request builder class for operations supported on the {@link SubBillMassTerminationLines} entity.
 */
export class SubBillMassTerminationLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillMassTerminationLines<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillMassTerminationLines` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillMassTerminationLines` entities.
   */
  getAll(): GetAllRequestBuilder<SubBillMassTerminationLines<T>, T> {
    return new GetAllRequestBuilder<SubBillMassTerminationLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SubBillMassTerminationLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillMassTerminationLines`.
   */
  create(
    entity: SubBillMassTerminationLines<T>
  ): CreateRequestBuilder<SubBillMassTerminationLines<T>, T> {
    return new CreateRequestBuilder<SubBillMassTerminationLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SubBillMassTerminationLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillMassTerminationLines.dataAreaId}.
   * @param terminationProcessId Key property. See {@link SubBillMassTerminationLines.terminationProcessId}.
   * @param customerAccount Key property. See {@link SubBillMassTerminationLines.customerAccount}.
   * @param item Key property. See {@link SubBillMassTerminationLines.item}.
   * @param billingScheduleNumber Key property. See {@link SubBillMassTerminationLines.billingScheduleNumber}.
   * @param lineNum Key property. See {@link SubBillMassTerminationLines.lineNum}.
   * @returns A request builder for creating requests to retrieve one `SubBillMassTerminationLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    terminationProcessId: DeserializedType<T, 'Edm.String'>,
    customerAccount: DeserializedType<T, 'Edm.String'>,
    item: DeserializedType<T, 'Edm.String'>,
    billingScheduleNumber: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<SubBillMassTerminationLines<T>, T> {
    return new GetByKeyRequestBuilder<SubBillMassTerminationLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TerminationProcessId: terminationProcessId,
        CustomerAccount: customerAccount,
        Item: item,
        BillingScheduleNumber: billingScheduleNumber,
        LineNum: lineNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillMassTerminationLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillMassTerminationLines`.
   */
  update(
    entity: SubBillMassTerminationLines<T>
  ): UpdateRequestBuilder<SubBillMassTerminationLines<T>, T> {
    return new UpdateRequestBuilder<SubBillMassTerminationLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillMassTerminationLines`.
   * @param dataAreaId Key property. See {@link SubBillMassTerminationLines.dataAreaId}.
   * @param terminationProcessId Key property. See {@link SubBillMassTerminationLines.terminationProcessId}.
   * @param customerAccount Key property. See {@link SubBillMassTerminationLines.customerAccount}.
   * @param item Key property. See {@link SubBillMassTerminationLines.item}.
   * @param billingScheduleNumber Key property. See {@link SubBillMassTerminationLines.billingScheduleNumber}.
   * @param lineNum Key property. See {@link SubBillMassTerminationLines.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillMassTerminationLines`.
   */
  delete(
    dataAreaId: string,
    terminationProcessId: string,
    customerAccount: string,
    item: string,
    billingScheduleNumber: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<SubBillMassTerminationLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillMassTerminationLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillMassTerminationLines` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillMassTerminationLines<T>
  ): DeleteRequestBuilder<SubBillMassTerminationLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    terminationProcessId?: string,
    customerAccount?: string,
    item?: string,
    billingScheduleNumber?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<SubBillMassTerminationLines<T>, T> {
    return new DeleteRequestBuilder<SubBillMassTerminationLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillMassTerminationLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TerminationProcessId: terminationProcessId!,
            CustomerAccount: customerAccount!,
            Item: item!,
            BillingScheduleNumber: billingScheduleNumber!,
            LineNum: lineNum!
          }
    );
  }
}
