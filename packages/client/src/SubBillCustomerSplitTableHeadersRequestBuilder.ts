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
import { SubBillCustomerSplitTableHeaders } from './SubBillCustomerSplitTableHeaders';

/**
 * Request builder class for operations supported on the {@link SubBillCustomerSplitTableHeaders} entity.
 */
export class SubBillCustomerSplitTableHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillCustomerSplitTableHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillCustomerSplitTableHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillCustomerSplitTableHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<SubBillCustomerSplitTableHeaders<T>, T> {
    return new GetAllRequestBuilder<SubBillCustomerSplitTableHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SubBillCustomerSplitTableHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillCustomerSplitTableHeaders`.
   */
  create(
    entity: SubBillCustomerSplitTableHeaders<T>
  ): CreateRequestBuilder<SubBillCustomerSplitTableHeaders<T>, T> {
    return new CreateRequestBuilder<SubBillCustomerSplitTableHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SubBillCustomerSplitTableHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillCustomerSplitTableHeaders.dataAreaId}.
   * @param scheduleNumber Key property. See {@link SubBillCustomerSplitTableHeaders.scheduleNumber}.
   * @param custAccount Key property. See {@link SubBillCustomerSplitTableHeaders.custAccount}.
   * @returns A request builder for creating requests to retrieve one `SubBillCustomerSplitTableHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    scheduleNumber: DeserializedType<T, 'Edm.String'>,
    custAccount: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SubBillCustomerSplitTableHeaders<T>, T> {
    return new GetByKeyRequestBuilder<SubBillCustomerSplitTableHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ScheduleNumber: scheduleNumber,
        CustAccount: custAccount
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillCustomerSplitTableHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillCustomerSplitTableHeaders`.
   */
  update(
    entity: SubBillCustomerSplitTableHeaders<T>
  ): UpdateRequestBuilder<SubBillCustomerSplitTableHeaders<T>, T> {
    return new UpdateRequestBuilder<SubBillCustomerSplitTableHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillCustomerSplitTableHeaders`.
   * @param dataAreaId Key property. See {@link SubBillCustomerSplitTableHeaders.dataAreaId}.
   * @param scheduleNumber Key property. See {@link SubBillCustomerSplitTableHeaders.scheduleNumber}.
   * @param custAccount Key property. See {@link SubBillCustomerSplitTableHeaders.custAccount}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillCustomerSplitTableHeaders`.
   */
  delete(
    dataAreaId: string,
    scheduleNumber: string,
    custAccount: string
  ): DeleteRequestBuilder<SubBillCustomerSplitTableHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillCustomerSplitTableHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillCustomerSplitTableHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillCustomerSplitTableHeaders<T>
  ): DeleteRequestBuilder<SubBillCustomerSplitTableHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    scheduleNumber?: string,
    custAccount?: string
  ): DeleteRequestBuilder<SubBillCustomerSplitTableHeaders<T>, T> {
    return new DeleteRequestBuilder<SubBillCustomerSplitTableHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillCustomerSplitTableHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ScheduleNumber: scheduleNumber!,
            CustAccount: custAccount!
          }
    );
  }
}
