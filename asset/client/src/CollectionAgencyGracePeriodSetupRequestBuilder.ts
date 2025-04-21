/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { CollectionAgencyGracePeriodSetup } from './CollectionAgencyGracePeriodSetup';
import { TableGroupAll } from './TableGroupAll';

/**
 * Request builder class for operations supported on the {@link CollectionAgencyGracePeriodSetup} entity.
 */
export class CollectionAgencyGracePeriodSetupRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CollectionAgencyGracePeriodSetup<T>, T> {
  /**
   * Returns a request builder for querying all `CollectionAgencyGracePeriodSetup` entities.
   * @returns A request builder for creating requests to retrieve all `CollectionAgencyGracePeriodSetup` entities.
   */
  getAll(): GetAllRequestBuilder<CollectionAgencyGracePeriodSetup<T>, T> {
    return new GetAllRequestBuilder<CollectionAgencyGracePeriodSetup<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CollectionAgencyGracePeriodSetup` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CollectionAgencyGracePeriodSetup`.
   */
  create(
    entity: CollectionAgencyGracePeriodSetup<T>
  ): CreateRequestBuilder<CollectionAgencyGracePeriodSetup<T>, T> {
    return new CreateRequestBuilder<CollectionAgencyGracePeriodSetup<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CollectionAgencyGracePeriodSetup` entity based on its keys.
   * @param accountOrGroupNumber Key property. See {@link CollectionAgencyGracePeriodSetup.accountOrGroupNumber}.
   * @param accountCode Key property. See {@link CollectionAgencyGracePeriodSetup.accountCode}.
   * @param validFrom Key property. See {@link CollectionAgencyGracePeriodSetup.validFrom}.
   * @param validTo Key property. See {@link CollectionAgencyGracePeriodSetup.validTo}.
   * @returns A request builder for creating requests to retrieve one `CollectionAgencyGracePeriodSetup` entity based on its keys.
   */
  getByKey(
    accountOrGroupNumber: DeserializedType<T, 'Edm.String'>,
    accountCode: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TableGroupAll'
    >,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<CollectionAgencyGracePeriodSetup<T>, T> {
    return new GetByKeyRequestBuilder<CollectionAgencyGracePeriodSetup<T>, T>(
      this.entityApi,
      {
        AccountOrGroupNumber: accountOrGroupNumber,
        AccountCode: accountCode,
        ValidFrom: validFrom,
        ValidTo: validTo
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CollectionAgencyGracePeriodSetup`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CollectionAgencyGracePeriodSetup`.
   */
  update(
    entity: CollectionAgencyGracePeriodSetup<T>
  ): UpdateRequestBuilder<CollectionAgencyGracePeriodSetup<T>, T> {
    return new UpdateRequestBuilder<CollectionAgencyGracePeriodSetup<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CollectionAgencyGracePeriodSetup`.
   * @param accountOrGroupNumber Key property. See {@link CollectionAgencyGracePeriodSetup.accountOrGroupNumber}.
   * @param accountCode Key property. See {@link CollectionAgencyGracePeriodSetup.accountCode}.
   * @param validFrom Key property. See {@link CollectionAgencyGracePeriodSetup.validFrom}.
   * @param validTo Key property. See {@link CollectionAgencyGracePeriodSetup.validTo}.
   * @returns A request builder for creating requests that delete an entity of type `CollectionAgencyGracePeriodSetup`.
   */
  delete(
    accountOrGroupNumber: string,
    accountCode: TableGroupAll,
    validFrom: Moment,
    validTo: Moment
  ): DeleteRequestBuilder<CollectionAgencyGracePeriodSetup<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CollectionAgencyGracePeriodSetup`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CollectionAgencyGracePeriodSetup` by taking the entity as a parameter.
   */
  delete(
    entity: CollectionAgencyGracePeriodSetup<T>
  ): DeleteRequestBuilder<CollectionAgencyGracePeriodSetup<T>, T>;
  delete(
    accountOrGroupNumberOrEntity: any,
    accountCode?: TableGroupAll,
    validFrom?: Moment,
    validTo?: Moment
  ): DeleteRequestBuilder<CollectionAgencyGracePeriodSetup<T>, T> {
    return new DeleteRequestBuilder<CollectionAgencyGracePeriodSetup<T>, T>(
      this.entityApi,
      accountOrGroupNumberOrEntity instanceof CollectionAgencyGracePeriodSetup
        ? accountOrGroupNumberOrEntity
        : {
            AccountOrGroupNumber: accountOrGroupNumberOrEntity!,
            AccountCode: accountCode!,
            ValidFrom: validFrom!,
            ValidTo: validTo!
          }
    );
  }
}
