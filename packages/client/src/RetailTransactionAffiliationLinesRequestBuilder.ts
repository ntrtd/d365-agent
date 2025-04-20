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
import { RetailTransactionAffiliationLines } from './RetailTransactionAffiliationLines';

/**
 * Request builder class for operations supported on the {@link RetailTransactionAffiliationLines} entity.
 */
export class RetailTransactionAffiliationLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionAffiliationLines<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionAffiliationLines` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionAffiliationLines` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTransactionAffiliationLines<T>, T> {
    return new GetAllRequestBuilder<RetailTransactionAffiliationLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTransactionAffiliationLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionAffiliationLines`.
   */
  create(
    entity: RetailTransactionAffiliationLines<T>
  ): CreateRequestBuilder<RetailTransactionAffiliationLines<T>, T> {
    return new CreateRequestBuilder<RetailTransactionAffiliationLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionAffiliationLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionAffiliationLines.dataAreaId}.
   * @param affiliationName Key property. See {@link RetailTransactionAffiliationLines.affiliationName}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionAffiliationLines.operatingUnitNumber}.
   * @param terminal Key property. See {@link RetailTransactionAffiliationLines.terminal}.
   * @param transactionNumber Key property. See {@link RetailTransactionAffiliationLines.transactionNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionAffiliationLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    affiliationName: DeserializedType<T, 'Edm.String'>,
    operatingUnitNumber: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    transactionNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTransactionAffiliationLines<T>, T> {
    return new GetByKeyRequestBuilder<RetailTransactionAffiliationLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        AffiliationName: affiliationName,
        OperatingUnitNumber: operatingUnitNumber,
        Terminal: terminal,
        TransactionNumber: transactionNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionAffiliationLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionAffiliationLines`.
   */
  update(
    entity: RetailTransactionAffiliationLines<T>
  ): UpdateRequestBuilder<RetailTransactionAffiliationLines<T>, T> {
    return new UpdateRequestBuilder<RetailTransactionAffiliationLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionAffiliationLines`.
   * @param dataAreaId Key property. See {@link RetailTransactionAffiliationLines.dataAreaId}.
   * @param affiliationName Key property. See {@link RetailTransactionAffiliationLines.affiliationName}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionAffiliationLines.operatingUnitNumber}.
   * @param terminal Key property. See {@link RetailTransactionAffiliationLines.terminal}.
   * @param transactionNumber Key property. See {@link RetailTransactionAffiliationLines.transactionNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionAffiliationLines`.
   */
  delete(
    dataAreaId: string,
    affiliationName: string,
    operatingUnitNumber: string,
    terminal: string,
    transactionNumber: string
  ): DeleteRequestBuilder<RetailTransactionAffiliationLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionAffiliationLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionAffiliationLines` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionAffiliationLines<T>
  ): DeleteRequestBuilder<RetailTransactionAffiliationLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    affiliationName?: string,
    operatingUnitNumber?: string,
    terminal?: string,
    transactionNumber?: string
  ): DeleteRequestBuilder<RetailTransactionAffiliationLines<T>, T> {
    return new DeleteRequestBuilder<RetailTransactionAffiliationLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionAffiliationLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AffiliationName: affiliationName!,
            OperatingUnitNumber: operatingUnitNumber!,
            Terminal: terminal!,
            TransactionNumber: transactionNumber!
          }
    );
  }
}
