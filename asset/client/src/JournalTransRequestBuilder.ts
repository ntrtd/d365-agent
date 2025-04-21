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
import { JournalTrans } from './JournalTrans';

/**
 * Request builder class for operations supported on the {@link JournalTrans} entity.
 */
export class JournalTransRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<JournalTrans<T>, T> {
  /**
   * Returns a request builder for querying all `JournalTrans` entities.
   * @returns A request builder for creating requests to retrieve all `JournalTrans` entities.
   */
  getAll(): GetAllRequestBuilder<JournalTrans<T>, T> {
    return new GetAllRequestBuilder<JournalTrans<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `JournalTrans` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JournalTrans`.
   */
  create(entity: JournalTrans<T>): CreateRequestBuilder<JournalTrans<T>, T> {
    return new CreateRequestBuilder<JournalTrans<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `JournalTrans` entity based on its keys.
   * @param dataAreaId Key property. See {@link JournalTrans.dataAreaId}.
   * @param lineNumber Key property. See {@link JournalTrans.lineNumber}.
   * @param journalId Key property. See {@link JournalTrans.journalId}.
   * @returns A request builder for creating requests to retrieve one `JournalTrans` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>,
    journalId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<JournalTrans<T>, T> {
    return new GetByKeyRequestBuilder<JournalTrans<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      LineNumber: lineNumber,
      JournalId: journalId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `JournalTrans`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JournalTrans`.
   */
  update(entity: JournalTrans<T>): UpdateRequestBuilder<JournalTrans<T>, T> {
    return new UpdateRequestBuilder<JournalTrans<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `JournalTrans`.
   * @param dataAreaId Key property. See {@link JournalTrans.dataAreaId}.
   * @param lineNumber Key property. See {@link JournalTrans.lineNumber}.
   * @param journalId Key property. See {@link JournalTrans.journalId}.
   * @returns A request builder for creating requests that delete an entity of type `JournalTrans`.
   */
  delete(
    dataAreaId: string,
    lineNumber: BigNumber,
    journalId: string
  ): DeleteRequestBuilder<JournalTrans<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `JournalTrans`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JournalTrans` by taking the entity as a parameter.
   */
  delete(entity: JournalTrans<T>): DeleteRequestBuilder<JournalTrans<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    lineNumber?: BigNumber,
    journalId?: string
  ): DeleteRequestBuilder<JournalTrans<T>, T> {
    return new DeleteRequestBuilder<JournalTrans<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof JournalTrans
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LineNumber: lineNumber!,
            JournalId: journalId!
          }
    );
  }
}
