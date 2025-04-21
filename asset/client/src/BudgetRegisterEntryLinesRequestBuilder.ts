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
import { BudgetRegisterEntryLines } from './BudgetRegisterEntryLines';

/**
 * Request builder class for operations supported on the {@link BudgetRegisterEntryLines} entity.
 */
export class BudgetRegisterEntryLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetRegisterEntryLines<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetRegisterEntryLines` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetRegisterEntryLines` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetRegisterEntryLines<T>, T> {
    return new GetAllRequestBuilder<BudgetRegisterEntryLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BudgetRegisterEntryLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetRegisterEntryLines`.
   */
  create(
    entity: BudgetRegisterEntryLines<T>
  ): CreateRequestBuilder<BudgetRegisterEntryLines<T>, T> {
    return new CreateRequestBuilder<BudgetRegisterEntryLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BudgetRegisterEntryLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link BudgetRegisterEntryLines.dataAreaId}.
   * @param legalEntityId Key property. See {@link BudgetRegisterEntryLines.legalEntityId}.
   * @param entryNumber Key property. See {@link BudgetRegisterEntryLines.entryNumber}.
   * @param lineNumber Key property. See {@link BudgetRegisterEntryLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `BudgetRegisterEntryLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    entryNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<BudgetRegisterEntryLines<T>, T> {
    return new GetByKeyRequestBuilder<BudgetRegisterEntryLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LegalEntityId: legalEntityId,
        EntryNumber: entryNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetRegisterEntryLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetRegisterEntryLines`.
   */
  update(
    entity: BudgetRegisterEntryLines<T>
  ): UpdateRequestBuilder<BudgetRegisterEntryLines<T>, T> {
    return new UpdateRequestBuilder<BudgetRegisterEntryLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetRegisterEntryLines`.
   * @param dataAreaId Key property. See {@link BudgetRegisterEntryLines.dataAreaId}.
   * @param legalEntityId Key property. See {@link BudgetRegisterEntryLines.legalEntityId}.
   * @param entryNumber Key property. See {@link BudgetRegisterEntryLines.entryNumber}.
   * @param lineNumber Key property. See {@link BudgetRegisterEntryLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetRegisterEntryLines`.
   */
  delete(
    dataAreaId: string,
    legalEntityId: string,
    entryNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<BudgetRegisterEntryLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetRegisterEntryLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetRegisterEntryLines` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetRegisterEntryLines<T>
  ): DeleteRequestBuilder<BudgetRegisterEntryLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    legalEntityId?: string,
    entryNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<BudgetRegisterEntryLines<T>, T> {
    return new DeleteRequestBuilder<BudgetRegisterEntryLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BudgetRegisterEntryLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LegalEntityId: legalEntityId!,
            EntryNumber: entryNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
