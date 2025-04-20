/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { UsTaxTransactionHistoryDetails } from './UsTaxTransactionHistoryDetails';

/**
 * Request builder class for operations supported on the {@link UsTaxTransactionHistoryDetails} entity.
 */
export class UsTaxTransactionHistoryDetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<UsTaxTransactionHistoryDetails<T>, T> {
  /**
   * Returns a request builder for querying all `UsTaxTransactionHistoryDetails` entities.
   * @returns A request builder for creating requests to retrieve all `UsTaxTransactionHistoryDetails` entities.
   */
  getAll(): GetAllRequestBuilder<UsTaxTransactionHistoryDetails<T>, T> {
    return new GetAllRequestBuilder<UsTaxTransactionHistoryDetails<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `UsTaxTransactionHistoryDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `UsTaxTransactionHistoryDetails`.
   */
  create(
    entity: UsTaxTransactionHistoryDetails<T>
  ): CreateRequestBuilder<UsTaxTransactionHistoryDetails<T>, T> {
    return new CreateRequestBuilder<UsTaxTransactionHistoryDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `UsTaxTransactionHistoryDetails` entity based on its keys.
   * @param dataAreaId Key property. See {@link UsTaxTransactionHistoryDetails.dataAreaId}.
   * @param personnelNumber Key property. See {@link UsTaxTransactionHistoryDetails.personnelNumber}.
   * @param transDate Key property. See {@link UsTaxTransactionHistoryDetails.transDate}.
   * @param payStatementNumber Key property. See {@link UsTaxTransactionHistoryDetails.payStatementNumber}.
   * @param code Key property. See {@link UsTaxTransactionHistoryDetails.code}.
   * @returns A request builder for creating requests to retrieve one `UsTaxTransactionHistoryDetails` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    transDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    payStatementNumber: DeserializedType<T, 'Edm.String'>,
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<UsTaxTransactionHistoryDetails<T>, T> {
    return new GetByKeyRequestBuilder<UsTaxTransactionHistoryDetails<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PersonnelNumber: personnelNumber,
        TransDate: transDate,
        PayStatementNumber: payStatementNumber,
        Code: code
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `UsTaxTransactionHistoryDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `UsTaxTransactionHistoryDetails`.
   */
  update(
    entity: UsTaxTransactionHistoryDetails<T>
  ): UpdateRequestBuilder<UsTaxTransactionHistoryDetails<T>, T> {
    return new UpdateRequestBuilder<UsTaxTransactionHistoryDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `UsTaxTransactionHistoryDetails`.
   * @param dataAreaId Key property. See {@link UsTaxTransactionHistoryDetails.dataAreaId}.
   * @param personnelNumber Key property. See {@link UsTaxTransactionHistoryDetails.personnelNumber}.
   * @param transDate Key property. See {@link UsTaxTransactionHistoryDetails.transDate}.
   * @param payStatementNumber Key property. See {@link UsTaxTransactionHistoryDetails.payStatementNumber}.
   * @param code Key property. See {@link UsTaxTransactionHistoryDetails.code}.
   * @returns A request builder for creating requests that delete an entity of type `UsTaxTransactionHistoryDetails`.
   */
  delete(
    dataAreaId: string,
    personnelNumber: string,
    transDate: Moment,
    payStatementNumber: string,
    code: string
  ): DeleteRequestBuilder<UsTaxTransactionHistoryDetails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `UsTaxTransactionHistoryDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `UsTaxTransactionHistoryDetails` by taking the entity as a parameter.
   */
  delete(
    entity: UsTaxTransactionHistoryDetails<T>
  ): DeleteRequestBuilder<UsTaxTransactionHistoryDetails<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    personnelNumber?: string,
    transDate?: Moment,
    payStatementNumber?: string,
    code?: string
  ): DeleteRequestBuilder<UsTaxTransactionHistoryDetails<T>, T> {
    return new DeleteRequestBuilder<UsTaxTransactionHistoryDetails<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof UsTaxTransactionHistoryDetails
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PersonnelNumber: personnelNumber!,
            TransDate: transDate!,
            PayStatementNumber: payStatementNumber!,
            Code: code!
          }
    );
  }
}
