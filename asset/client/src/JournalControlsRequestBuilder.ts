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
import { JournalControls } from './JournalControls';
import { LedgerJournalAcTypeAll } from './LedgerJournalAcTypeAll';

/**
 * Request builder class for operations supported on the {@link JournalControls} entity.
 */
export class JournalControlsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<JournalControls<T>, T> {
  /**
   * Returns a request builder for querying all `JournalControls` entities.
   * @returns A request builder for creating requests to retrieve all `JournalControls` entities.
   */
  getAll(): GetAllRequestBuilder<JournalControls<T>, T> {
    return new GetAllRequestBuilder<JournalControls<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `JournalControls` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JournalControls`.
   */
  create(
    entity: JournalControls<T>
  ): CreateRequestBuilder<JournalControls<T>, T> {
    return new CreateRequestBuilder<JournalControls<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `JournalControls` entity based on its keys.
   * @param dataAreaId Key property. See {@link JournalControls.dataAreaId}.
   * @param journalName Key property. See {@link JournalControls.journalName}.
   * @param accountType Key property. See {@link JournalControls.accountType}.
   * @param journalLegalEntity Key property. See {@link JournalControls.journalLegalEntity}.
   * @param ledgerLegalEntity Key property. See {@link JournalControls.ledgerLegalEntity}.
   * @param accountStructure Key property. See {@link JournalControls.accountStructure}.
   * @returns A request builder for creating requests to retrieve one `JournalControls` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalName: DeserializedType<T, 'Edm.String'>,
    accountType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.LedgerJournalACTypeAll'
    >,
    journalLegalEntity: DeserializedType<T, 'Edm.String'>,
    ledgerLegalEntity: DeserializedType<T, 'Edm.String'>,
    accountStructure: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<JournalControls<T>, T> {
    return new GetByKeyRequestBuilder<JournalControls<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      JournalName: journalName,
      AccountType: accountType,
      JournalLegalEntity: journalLegalEntity,
      LedgerLegalEntity: ledgerLegalEntity,
      AccountStructure: accountStructure
    });
  }

  /**
   * Returns a request builder for updating an entity of type `JournalControls`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JournalControls`.
   */
  update(
    entity: JournalControls<T>
  ): UpdateRequestBuilder<JournalControls<T>, T> {
    return new UpdateRequestBuilder<JournalControls<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `JournalControls`.
   * @param dataAreaId Key property. See {@link JournalControls.dataAreaId}.
   * @param journalName Key property. See {@link JournalControls.journalName}.
   * @param accountType Key property. See {@link JournalControls.accountType}.
   * @param journalLegalEntity Key property. See {@link JournalControls.journalLegalEntity}.
   * @param ledgerLegalEntity Key property. See {@link JournalControls.ledgerLegalEntity}.
   * @param accountStructure Key property. See {@link JournalControls.accountStructure}.
   * @returns A request builder for creating requests that delete an entity of type `JournalControls`.
   */
  delete(
    dataAreaId: string,
    journalName: string,
    accountType: LedgerJournalAcTypeAll,
    journalLegalEntity: string,
    ledgerLegalEntity: string,
    accountStructure: string
  ): DeleteRequestBuilder<JournalControls<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `JournalControls`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JournalControls` by taking the entity as a parameter.
   */
  delete(
    entity: JournalControls<T>
  ): DeleteRequestBuilder<JournalControls<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalName?: string,
    accountType?: LedgerJournalAcTypeAll,
    journalLegalEntity?: string,
    ledgerLegalEntity?: string,
    accountStructure?: string
  ): DeleteRequestBuilder<JournalControls<T>, T> {
    return new DeleteRequestBuilder<JournalControls<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof JournalControls
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalName: journalName!,
            AccountType: accountType!,
            JournalLegalEntity: journalLegalEntity!,
            LedgerLegalEntity: ledgerLegalEntity!,
            AccountStructure: accountStructure!
          }
    );
  }
}
