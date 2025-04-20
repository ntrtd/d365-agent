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
import { BudgetRegisterEntryHeaders } from './BudgetRegisterEntryHeaders';

/**
 * Request builder class for operations supported on the {@link BudgetRegisterEntryHeaders} entity.
 */
export class BudgetRegisterEntryHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetRegisterEntryHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetRegisterEntryHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetRegisterEntryHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetRegisterEntryHeaders<T>, T> {
    return new GetAllRequestBuilder<BudgetRegisterEntryHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BudgetRegisterEntryHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetRegisterEntryHeaders`.
   */
  create(
    entity: BudgetRegisterEntryHeaders<T>
  ): CreateRequestBuilder<BudgetRegisterEntryHeaders<T>, T> {
    return new CreateRequestBuilder<BudgetRegisterEntryHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BudgetRegisterEntryHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link BudgetRegisterEntryHeaders.dataAreaId}.
   * @param legalEntityId Key property. See {@link BudgetRegisterEntryHeaders.legalEntityId}.
   * @param entryNumber Key property. See {@link BudgetRegisterEntryHeaders.entryNumber}.
   * @returns A request builder for creating requests to retrieve one `BudgetRegisterEntryHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    entryNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BudgetRegisterEntryHeaders<T>, T> {
    return new GetByKeyRequestBuilder<BudgetRegisterEntryHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LegalEntityId: legalEntityId,
        EntryNumber: entryNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetRegisterEntryHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetRegisterEntryHeaders`.
   */
  update(
    entity: BudgetRegisterEntryHeaders<T>
  ): UpdateRequestBuilder<BudgetRegisterEntryHeaders<T>, T> {
    return new UpdateRequestBuilder<BudgetRegisterEntryHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetRegisterEntryHeaders`.
   * @param dataAreaId Key property. See {@link BudgetRegisterEntryHeaders.dataAreaId}.
   * @param legalEntityId Key property. See {@link BudgetRegisterEntryHeaders.legalEntityId}.
   * @param entryNumber Key property. See {@link BudgetRegisterEntryHeaders.entryNumber}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetRegisterEntryHeaders`.
   */
  delete(
    dataAreaId: string,
    legalEntityId: string,
    entryNumber: string
  ): DeleteRequestBuilder<BudgetRegisterEntryHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetRegisterEntryHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetRegisterEntryHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetRegisterEntryHeaders<T>
  ): DeleteRequestBuilder<BudgetRegisterEntryHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    legalEntityId?: string,
    entryNumber?: string
  ): DeleteRequestBuilder<BudgetRegisterEntryHeaders<T>, T> {
    return new DeleteRequestBuilder<BudgetRegisterEntryHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BudgetRegisterEntryHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LegalEntityId: legalEntityId!,
            EntryNumber: entryNumber!
          }
    );
  }
}
