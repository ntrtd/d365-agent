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
import { LedgerMatrixAccountReports } from './LedgerMatrixAccountReports';

/**
 * Request builder class for operations supported on the {@link LedgerMatrixAccountReports} entity.
 */
export class LedgerMatrixAccountReportsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LedgerMatrixAccountReports<T>, T> {
  /**
   * Returns a request builder for querying all `LedgerMatrixAccountReports` entities.
   * @returns A request builder for creating requests to retrieve all `LedgerMatrixAccountReports` entities.
   */
  getAll(): GetAllRequestBuilder<LedgerMatrixAccountReports<T>, T> {
    return new GetAllRequestBuilder<LedgerMatrixAccountReports<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LedgerMatrixAccountReports` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LedgerMatrixAccountReports`.
   */
  create(
    entity: LedgerMatrixAccountReports<T>
  ): CreateRequestBuilder<LedgerMatrixAccountReports<T>, T> {
    return new CreateRequestBuilder<LedgerMatrixAccountReports<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LedgerMatrixAccountReports` entity based on its keys.
   * @param dataAreaId Key property. See {@link LedgerMatrixAccountReports.dataAreaId}.
   * @param accountMatrix Key property. See {@link LedgerMatrixAccountReports.accountMatrix}.
   * @param subLevelMainAccountId Key property. See {@link LedgerMatrixAccountReports.subLevelMainAccountId}.
   * @returns A request builder for creating requests to retrieve one `LedgerMatrixAccountReports` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    accountMatrix: DeserializedType<T, 'Edm.String'>,
    subLevelMainAccountId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LedgerMatrixAccountReports<T>, T> {
    return new GetByKeyRequestBuilder<LedgerMatrixAccountReports<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        AccountMatrix: accountMatrix,
        SubLevelMainAccountId: subLevelMainAccountId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LedgerMatrixAccountReports`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LedgerMatrixAccountReports`.
   */
  update(
    entity: LedgerMatrixAccountReports<T>
  ): UpdateRequestBuilder<LedgerMatrixAccountReports<T>, T> {
    return new UpdateRequestBuilder<LedgerMatrixAccountReports<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LedgerMatrixAccountReports`.
   * @param dataAreaId Key property. See {@link LedgerMatrixAccountReports.dataAreaId}.
   * @param accountMatrix Key property. See {@link LedgerMatrixAccountReports.accountMatrix}.
   * @param subLevelMainAccountId Key property. See {@link LedgerMatrixAccountReports.subLevelMainAccountId}.
   * @returns A request builder for creating requests that delete an entity of type `LedgerMatrixAccountReports`.
   */
  delete(
    dataAreaId: string,
    accountMatrix: string,
    subLevelMainAccountId: string
  ): DeleteRequestBuilder<LedgerMatrixAccountReports<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LedgerMatrixAccountReports`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LedgerMatrixAccountReports` by taking the entity as a parameter.
   */
  delete(
    entity: LedgerMatrixAccountReports<T>
  ): DeleteRequestBuilder<LedgerMatrixAccountReports<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    accountMatrix?: string,
    subLevelMainAccountId?: string
  ): DeleteRequestBuilder<LedgerMatrixAccountReports<T>, T> {
    return new DeleteRequestBuilder<LedgerMatrixAccountReports<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LedgerMatrixAccountReports
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AccountMatrix: accountMatrix!,
            SubLevelMainAccountId: subLevelMainAccountId!
          }
    );
  }
}
