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
import { TradeAgreementJournalNames } from './TradeAgreementJournalNames';

/**
 * Request builder class for operations supported on the {@link TradeAgreementJournalNames} entity.
 */
export class TradeAgreementJournalNamesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TradeAgreementJournalNames<T>, T> {
  /**
   * Returns a request builder for querying all `TradeAgreementJournalNames` entities.
   * @returns A request builder for creating requests to retrieve all `TradeAgreementJournalNames` entities.
   */
  getAll(): GetAllRequestBuilder<TradeAgreementJournalNames<T>, T> {
    return new GetAllRequestBuilder<TradeAgreementJournalNames<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TradeAgreementJournalNames` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TradeAgreementJournalNames`.
   */
  create(
    entity: TradeAgreementJournalNames<T>
  ): CreateRequestBuilder<TradeAgreementJournalNames<T>, T> {
    return new CreateRequestBuilder<TradeAgreementJournalNames<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TradeAgreementJournalNames` entity based on its keys.
   * @param dataAreaId Key property. See {@link TradeAgreementJournalNames.dataAreaId}.
   * @param tradeAgreementJournalNameId Key property. See {@link TradeAgreementJournalNames.tradeAgreementJournalNameId}.
   * @returns A request builder for creating requests to retrieve one `TradeAgreementJournalNames` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    tradeAgreementJournalNameId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TradeAgreementJournalNames<T>, T> {
    return new GetByKeyRequestBuilder<TradeAgreementJournalNames<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TradeAgreementJournalNameId: tradeAgreementJournalNameId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TradeAgreementJournalNames`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TradeAgreementJournalNames`.
   */
  update(
    entity: TradeAgreementJournalNames<T>
  ): UpdateRequestBuilder<TradeAgreementJournalNames<T>, T> {
    return new UpdateRequestBuilder<TradeAgreementJournalNames<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TradeAgreementJournalNames`.
   * @param dataAreaId Key property. See {@link TradeAgreementJournalNames.dataAreaId}.
   * @param tradeAgreementJournalNameId Key property. See {@link TradeAgreementJournalNames.tradeAgreementJournalNameId}.
   * @returns A request builder for creating requests that delete an entity of type `TradeAgreementJournalNames`.
   */
  delete(
    dataAreaId: string,
    tradeAgreementJournalNameId: string
  ): DeleteRequestBuilder<TradeAgreementJournalNames<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TradeAgreementJournalNames`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TradeAgreementJournalNames` by taking the entity as a parameter.
   */
  delete(
    entity: TradeAgreementJournalNames<T>
  ): DeleteRequestBuilder<TradeAgreementJournalNames<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    tradeAgreementJournalNameId?: string
  ): DeleteRequestBuilder<TradeAgreementJournalNames<T>, T> {
    return new DeleteRequestBuilder<TradeAgreementJournalNames<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TradeAgreementJournalNames
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TradeAgreementJournalNameId: tradeAgreementJournalNameId!
          }
    );
  }
}
