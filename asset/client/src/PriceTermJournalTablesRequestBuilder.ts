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
import { PriceTermJournalTables } from './PriceTermJournalTables';

/**
 * Request builder class for operations supported on the {@link PriceTermJournalTables} entity.
 */
export class PriceTermJournalTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PriceTermJournalTables<T>, T> {
  /**
   * Returns a request builder for querying all `PriceTermJournalTables` entities.
   * @returns A request builder for creating requests to retrieve all `PriceTermJournalTables` entities.
   */
  getAll(): GetAllRequestBuilder<PriceTermJournalTables<T>, T> {
    return new GetAllRequestBuilder<PriceTermJournalTables<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PriceTermJournalTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PriceTermJournalTables`.
   */
  create(
    entity: PriceTermJournalTables<T>
  ): CreateRequestBuilder<PriceTermJournalTables<T>, T> {
    return new CreateRequestBuilder<PriceTermJournalTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PriceTermJournalTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link PriceTermJournalTables.dataAreaId}.
   * @param agreementId Key property. See {@link PriceTermJournalTables.agreementId}.
   * @returns A request builder for creating requests to retrieve one `PriceTermJournalTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    agreementId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PriceTermJournalTables<T>, T> {
    return new GetByKeyRequestBuilder<PriceTermJournalTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        AgreementId: agreementId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PriceTermJournalTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PriceTermJournalTables`.
   */
  update(
    entity: PriceTermJournalTables<T>
  ): UpdateRequestBuilder<PriceTermJournalTables<T>, T> {
    return new UpdateRequestBuilder<PriceTermJournalTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PriceTermJournalTables`.
   * @param dataAreaId Key property. See {@link PriceTermJournalTables.dataAreaId}.
   * @param agreementId Key property. See {@link PriceTermJournalTables.agreementId}.
   * @returns A request builder for creating requests that delete an entity of type `PriceTermJournalTables`.
   */
  delete(
    dataAreaId: string,
    agreementId: string
  ): DeleteRequestBuilder<PriceTermJournalTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PriceTermJournalTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PriceTermJournalTables` by taking the entity as a parameter.
   */
  delete(
    entity: PriceTermJournalTables<T>
  ): DeleteRequestBuilder<PriceTermJournalTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    agreementId?: string
  ): DeleteRequestBuilder<PriceTermJournalTables<T>, T> {
    return new DeleteRequestBuilder<PriceTermJournalTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PriceTermJournalTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AgreementId: agreementId!
          }
    );
  }
}
