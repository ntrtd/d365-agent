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
import { PriceTermJournalTrans } from './PriceTermJournalTrans';

/**
 * Request builder class for operations supported on the {@link PriceTermJournalTrans} entity.
 */
export class PriceTermJournalTransRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PriceTermJournalTrans<T>, T> {
  /**
   * Returns a request builder for querying all `PriceTermJournalTrans` entities.
   * @returns A request builder for creating requests to retrieve all `PriceTermJournalTrans` entities.
   */
  getAll(): GetAllRequestBuilder<PriceTermJournalTrans<T>, T> {
    return new GetAllRequestBuilder<PriceTermJournalTrans<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PriceTermJournalTrans` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PriceTermJournalTrans`.
   */
  create(
    entity: PriceTermJournalTrans<T>
  ): CreateRequestBuilder<PriceTermJournalTrans<T>, T> {
    return new CreateRequestBuilder<PriceTermJournalTrans<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PriceTermJournalTrans` entity based on its keys.
   * @param dataAreaId Key property. See {@link PriceTermJournalTrans.dataAreaId}.
   * @param agreementId Key property. See {@link PriceTermJournalTrans.agreementId}.
   * @param lineNum Key property. See {@link PriceTermJournalTrans.lineNum}.
   * @returns A request builder for creating requests to retrieve one `PriceTermJournalTrans` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    agreementId: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<PriceTermJournalTrans<T>, T> {
    return new GetByKeyRequestBuilder<PriceTermJournalTrans<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        AgreementId: agreementId,
        LineNum: lineNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PriceTermJournalTrans`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PriceTermJournalTrans`.
   */
  update(
    entity: PriceTermJournalTrans<T>
  ): UpdateRequestBuilder<PriceTermJournalTrans<T>, T> {
    return new UpdateRequestBuilder<PriceTermJournalTrans<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PriceTermJournalTrans`.
   * @param dataAreaId Key property. See {@link PriceTermJournalTrans.dataAreaId}.
   * @param agreementId Key property. See {@link PriceTermJournalTrans.agreementId}.
   * @param lineNum Key property. See {@link PriceTermJournalTrans.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `PriceTermJournalTrans`.
   */
  delete(
    dataAreaId: string,
    agreementId: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<PriceTermJournalTrans<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PriceTermJournalTrans`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PriceTermJournalTrans` by taking the entity as a parameter.
   */
  delete(
    entity: PriceTermJournalTrans<T>
  ): DeleteRequestBuilder<PriceTermJournalTrans<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    agreementId?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<PriceTermJournalTrans<T>, T> {
    return new DeleteRequestBuilder<PriceTermJournalTrans<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PriceTermJournalTrans
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AgreementId: agreementId!,
            LineNum: lineNum!
          }
    );
  }
}
