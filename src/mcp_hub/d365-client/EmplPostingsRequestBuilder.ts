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
import { EmplPostings } from './EmplPostings';
import { TableGroupAll } from './TableGroupAll';

/**
 * Request builder class for operations supported on the {@link EmplPostings} entity.
 */
export class EmplPostingsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EmplPostings<T>, T> {
  /**
   * Returns a request builder for querying all `EmplPostings` entities.
   * @returns A request builder for creating requests to retrieve all `EmplPostings` entities.
   */
  getAll(): GetAllRequestBuilder<EmplPostings<T>, T> {
    return new GetAllRequestBuilder<EmplPostings<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EmplPostings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmplPostings`.
   */
  create(entity: EmplPostings<T>): CreateRequestBuilder<EmplPostings<T>, T> {
    return new CreateRequestBuilder<EmplPostings<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `EmplPostings` entity based on its keys.
   * @param dataAreaId Key property. See {@link EmplPostings.dataAreaId}.
   * @param postingProfile Key property. See {@link EmplPostings.postingProfile}.
   * @param accountCode Key property. See {@link EmplPostings.accountCode}.
   * @param num Key property. See {@link EmplPostings.num}.
   * @returns A request builder for creating requests to retrieve one `EmplPostings` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    postingProfile: DeserializedType<T, 'Edm.String'>,
    accountCode: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TableGroupAll'
    >,
    num: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EmplPostings<T>, T> {
    return new GetByKeyRequestBuilder<EmplPostings<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      PostingProfile: postingProfile,
      AccountCode: accountCode,
      Num: num
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EmplPostings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmplPostings`.
   */
  update(entity: EmplPostings<T>): UpdateRequestBuilder<EmplPostings<T>, T> {
    return new UpdateRequestBuilder<EmplPostings<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EmplPostings`.
   * @param dataAreaId Key property. See {@link EmplPostings.dataAreaId}.
   * @param postingProfile Key property. See {@link EmplPostings.postingProfile}.
   * @param accountCode Key property. See {@link EmplPostings.accountCode}.
   * @param num Key property. See {@link EmplPostings.num}.
   * @returns A request builder for creating requests that delete an entity of type `EmplPostings`.
   */
  delete(
    dataAreaId: string,
    postingProfile: string,
    accountCode: TableGroupAll,
    num: string
  ): DeleteRequestBuilder<EmplPostings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EmplPostings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmplPostings` by taking the entity as a parameter.
   */
  delete(entity: EmplPostings<T>): DeleteRequestBuilder<EmplPostings<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    postingProfile?: string,
    accountCode?: TableGroupAll,
    num?: string
  ): DeleteRequestBuilder<EmplPostings<T>, T> {
    return new DeleteRequestBuilder<EmplPostings<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof EmplPostings
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PostingProfile: postingProfile!,
            AccountCode: accountCode!,
            Num: num!
          }
    );
  }
}
