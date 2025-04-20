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
import { BudgetRegisterEntries } from './BudgetRegisterEntries';

/**
 * Request builder class for operations supported on the {@link BudgetRegisterEntries} entity.
 */
export class BudgetRegisterEntriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetRegisterEntries<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetRegisterEntries` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetRegisterEntries` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetRegisterEntries<T>, T> {
    return new GetAllRequestBuilder<BudgetRegisterEntries<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BudgetRegisterEntries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetRegisterEntries`.
   */
  create(
    entity: BudgetRegisterEntries<T>
  ): CreateRequestBuilder<BudgetRegisterEntries<T>, T> {
    return new CreateRequestBuilder<BudgetRegisterEntries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BudgetRegisterEntries` entity based on its keys.
   * @param dataAreaId Key property. See {@link BudgetRegisterEntries.dataAreaId}.
   * @param entryNumber Key property. See {@link BudgetRegisterEntries.entryNumber}.
   * @param legalEntityId Key property. See {@link BudgetRegisterEntries.legalEntityId}.
   * @param lineNumber Key property. See {@link BudgetRegisterEntries.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `BudgetRegisterEntries` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    entryNumber: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<BudgetRegisterEntries<T>, T> {
    return new GetByKeyRequestBuilder<BudgetRegisterEntries<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        EntryNumber: entryNumber,
        LegalEntityId: legalEntityId,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetRegisterEntries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetRegisterEntries`.
   */
  update(
    entity: BudgetRegisterEntries<T>
  ): UpdateRequestBuilder<BudgetRegisterEntries<T>, T> {
    return new UpdateRequestBuilder<BudgetRegisterEntries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetRegisterEntries`.
   * @param dataAreaId Key property. See {@link BudgetRegisterEntries.dataAreaId}.
   * @param entryNumber Key property. See {@link BudgetRegisterEntries.entryNumber}.
   * @param legalEntityId Key property. See {@link BudgetRegisterEntries.legalEntityId}.
   * @param lineNumber Key property. See {@link BudgetRegisterEntries.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetRegisterEntries`.
   */
  delete(
    dataAreaId: string,
    entryNumber: string,
    legalEntityId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<BudgetRegisterEntries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetRegisterEntries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetRegisterEntries` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetRegisterEntries<T>
  ): DeleteRequestBuilder<BudgetRegisterEntries<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    entryNumber?: string,
    legalEntityId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<BudgetRegisterEntries<T>, T> {
    return new DeleteRequestBuilder<BudgetRegisterEntries<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BudgetRegisterEntries
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            EntryNumber: entryNumber!,
            LegalEntityId: legalEntityId!,
            LineNumber: lineNumber!
          }
    );
  }
}
