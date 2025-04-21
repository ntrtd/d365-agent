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
import { CustomerPostingProfileLines } from './CustomerPostingProfileLines';
import { TableGroupAll } from './TableGroupAll';

/**
 * Request builder class for operations supported on the {@link CustomerPostingProfileLines} entity.
 */
export class CustomerPostingProfileLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomerPostingProfileLines<T>, T> {
  /**
   * Returns a request builder for querying all `CustomerPostingProfileLines` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerPostingProfileLines` entities.
   */
  getAll(): GetAllRequestBuilder<CustomerPostingProfileLines<T>, T> {
    return new GetAllRequestBuilder<CustomerPostingProfileLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CustomerPostingProfileLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerPostingProfileLines`.
   */
  create(
    entity: CustomerPostingProfileLines<T>
  ): CreateRequestBuilder<CustomerPostingProfileLines<T>, T> {
    return new CreateRequestBuilder<CustomerPostingProfileLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomerPostingProfileLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustomerPostingProfileLines.dataAreaId}.
   * @param postingProfile Key property. See {@link CustomerPostingProfileLines.postingProfile}.
   * @param accountCode Key property. See {@link CustomerPostingProfileLines.accountCode}.
   * @param accountOrGroupNumber Key property. See {@link CustomerPostingProfileLines.accountOrGroupNumber}.
   * @returns A request builder for creating requests to retrieve one `CustomerPostingProfileLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    postingProfile: DeserializedType<T, 'Edm.String'>,
    accountCode: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TableGroupAll'
    >,
    accountOrGroupNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomerPostingProfileLines<T>, T> {
    return new GetByKeyRequestBuilder<CustomerPostingProfileLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PostingProfile: postingProfile,
        AccountCode: accountCode,
        AccountOrGroupNumber: accountOrGroupNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerPostingProfileLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerPostingProfileLines`.
   */
  update(
    entity: CustomerPostingProfileLines<T>
  ): UpdateRequestBuilder<CustomerPostingProfileLines<T>, T> {
    return new UpdateRequestBuilder<CustomerPostingProfileLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomerPostingProfileLines`.
   * @param dataAreaId Key property. See {@link CustomerPostingProfileLines.dataAreaId}.
   * @param postingProfile Key property. See {@link CustomerPostingProfileLines.postingProfile}.
   * @param accountCode Key property. See {@link CustomerPostingProfileLines.accountCode}.
   * @param accountOrGroupNumber Key property. See {@link CustomerPostingProfileLines.accountOrGroupNumber}.
   * @returns A request builder for creating requests that delete an entity of type `CustomerPostingProfileLines`.
   */
  delete(
    dataAreaId: string,
    postingProfile: string,
    accountCode: TableGroupAll,
    accountOrGroupNumber: string
  ): DeleteRequestBuilder<CustomerPostingProfileLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerPostingProfileLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerPostingProfileLines` by taking the entity as a parameter.
   */
  delete(
    entity: CustomerPostingProfileLines<T>
  ): DeleteRequestBuilder<CustomerPostingProfileLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    postingProfile?: string,
    accountCode?: TableGroupAll,
    accountOrGroupNumber?: string
  ): DeleteRequestBuilder<CustomerPostingProfileLines<T>, T> {
    return new DeleteRequestBuilder<CustomerPostingProfileLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustomerPostingProfileLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PostingProfile: postingProfile!,
            AccountCode: accountCode!,
            AccountOrGroupNumber: accountOrGroupNumber!
          }
    );
  }
}
