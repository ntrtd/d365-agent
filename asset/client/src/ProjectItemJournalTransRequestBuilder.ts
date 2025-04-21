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
import { ProjectItemJournalTrans } from './ProjectItemJournalTrans';

/**
 * Request builder class for operations supported on the {@link ProjectItemJournalTrans} entity.
 */
export class ProjectItemJournalTransRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectItemJournalTrans<T>, T> {
  /**
   * Returns a request builder for querying all `ProjectItemJournalTrans` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectItemJournalTrans` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectItemJournalTrans<T>, T> {
    return new GetAllRequestBuilder<ProjectItemJournalTrans<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjectItemJournalTrans` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectItemJournalTrans`.
   */
  create(
    entity: ProjectItemJournalTrans<T>
  ): CreateRequestBuilder<ProjectItemJournalTrans<T>, T> {
    return new CreateRequestBuilder<ProjectItemJournalTrans<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjectItemJournalTrans` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjectItemJournalTrans.dataAreaId}.
   * @param journalId Key property. See {@link ProjectItemJournalTrans.journalId}.
   * @param voucher Key property. See {@link ProjectItemJournalTrans.voucher}.
   * @param lineNum Key property. See {@link ProjectItemJournalTrans.lineNum}.
   * @returns A request builder for creating requests to retrieve one `ProjectItemJournalTrans` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalId: DeserializedType<T, 'Edm.String'>,
    voucher: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<ProjectItemJournalTrans<T>, T> {
    return new GetByKeyRequestBuilder<ProjectItemJournalTrans<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JournalId: journalId,
        Voucher: voucher,
        LineNum: lineNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectItemJournalTrans`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectItemJournalTrans`.
   */
  update(
    entity: ProjectItemJournalTrans<T>
  ): UpdateRequestBuilder<ProjectItemJournalTrans<T>, T> {
    return new UpdateRequestBuilder<ProjectItemJournalTrans<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectItemJournalTrans`.
   * @param dataAreaId Key property. See {@link ProjectItemJournalTrans.dataAreaId}.
   * @param journalId Key property. See {@link ProjectItemJournalTrans.journalId}.
   * @param voucher Key property. See {@link ProjectItemJournalTrans.voucher}.
   * @param lineNum Key property. See {@link ProjectItemJournalTrans.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectItemJournalTrans`.
   */
  delete(
    dataAreaId: string,
    journalId: string,
    voucher: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<ProjectItemJournalTrans<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectItemJournalTrans`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectItemJournalTrans` by taking the entity as a parameter.
   */
  delete(
    entity: ProjectItemJournalTrans<T>
  ): DeleteRequestBuilder<ProjectItemJournalTrans<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalId?: string,
    voucher?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<ProjectItemJournalTrans<T>, T> {
    return new DeleteRequestBuilder<ProjectItemJournalTrans<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjectItemJournalTrans
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalId: journalId!,
            Voucher: voucher!,
            LineNum: lineNum!
          }
    );
  }
}
