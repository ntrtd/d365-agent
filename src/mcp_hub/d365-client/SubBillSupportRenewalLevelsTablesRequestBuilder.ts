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
import { SubBillSupportRenewalLevelsTables } from './SubBillSupportRenewalLevelsTables';

/**
 * Request builder class for operations supported on the {@link SubBillSupportRenewalLevelsTables} entity.
 */
export class SubBillSupportRenewalLevelsTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillSupportRenewalLevelsTables<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillSupportRenewalLevelsTables` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillSupportRenewalLevelsTables` entities.
   */
  getAll(): GetAllRequestBuilder<SubBillSupportRenewalLevelsTables<T>, T> {
    return new GetAllRequestBuilder<SubBillSupportRenewalLevelsTables<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SubBillSupportRenewalLevelsTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillSupportRenewalLevelsTables`.
   */
  create(
    entity: SubBillSupportRenewalLevelsTables<T>
  ): CreateRequestBuilder<SubBillSupportRenewalLevelsTables<T>, T> {
    return new CreateRequestBuilder<SubBillSupportRenewalLevelsTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SubBillSupportRenewalLevelsTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillSupportRenewalLevelsTables.dataAreaId}.
   * @param supportLevel Key property. See {@link SubBillSupportRenewalLevelsTables.supportLevel}.
   * @returns A request builder for creating requests to retrieve one `SubBillSupportRenewalLevelsTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    supportLevel: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SubBillSupportRenewalLevelsTables<T>, T> {
    return new GetByKeyRequestBuilder<SubBillSupportRenewalLevelsTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SupportLevel: supportLevel
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillSupportRenewalLevelsTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillSupportRenewalLevelsTables`.
   */
  update(
    entity: SubBillSupportRenewalLevelsTables<T>
  ): UpdateRequestBuilder<SubBillSupportRenewalLevelsTables<T>, T> {
    return new UpdateRequestBuilder<SubBillSupportRenewalLevelsTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillSupportRenewalLevelsTables`.
   * @param dataAreaId Key property. See {@link SubBillSupportRenewalLevelsTables.dataAreaId}.
   * @param supportLevel Key property. See {@link SubBillSupportRenewalLevelsTables.supportLevel}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillSupportRenewalLevelsTables`.
   */
  delete(
    dataAreaId: string,
    supportLevel: string
  ): DeleteRequestBuilder<SubBillSupportRenewalLevelsTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillSupportRenewalLevelsTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillSupportRenewalLevelsTables` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillSupportRenewalLevelsTables<T>
  ): DeleteRequestBuilder<SubBillSupportRenewalLevelsTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    supportLevel?: string
  ): DeleteRequestBuilder<SubBillSupportRenewalLevelsTables<T>, T> {
    return new DeleteRequestBuilder<SubBillSupportRenewalLevelsTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillSupportRenewalLevelsTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SupportLevel: supportLevel!
          }
    );
  }
}
