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
import { SubBillCpiTables } from './SubBillCpiTables';

/**
 * Request builder class for operations supported on the {@link SubBillCpiTables} entity.
 */
export class SubBillCpiTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillCpiTables<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillCpiTables` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillCpiTables` entities.
   */
  getAll(): GetAllRequestBuilder<SubBillCpiTables<T>, T> {
    return new GetAllRequestBuilder<SubBillCpiTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SubBillCpiTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillCpiTables`.
   */
  create(
    entity: SubBillCpiTables<T>
  ): CreateRequestBuilder<SubBillCpiTables<T>, T> {
    return new CreateRequestBuilder<SubBillCpiTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SubBillCpiTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillCpiTables.dataAreaId}.
   * @param cpiSchedule Key property. See {@link SubBillCpiTables.cpiSchedule}.
   * @returns A request builder for creating requests to retrieve one `SubBillCpiTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    cpiSchedule: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SubBillCpiTables<T>, T> {
    return new GetByKeyRequestBuilder<SubBillCpiTables<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      CPISchedule: cpiSchedule
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillCpiTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillCpiTables`.
   */
  update(
    entity: SubBillCpiTables<T>
  ): UpdateRequestBuilder<SubBillCpiTables<T>, T> {
    return new UpdateRequestBuilder<SubBillCpiTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillCpiTables`.
   * @param dataAreaId Key property. See {@link SubBillCpiTables.dataAreaId}.
   * @param cpiSchedule Key property. See {@link SubBillCpiTables.cpiSchedule}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillCpiTables`.
   */
  delete(
    dataAreaId: string,
    cpiSchedule: string
  ): DeleteRequestBuilder<SubBillCpiTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillCpiTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillCpiTables` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillCpiTables<T>
  ): DeleteRequestBuilder<SubBillCpiTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    cpiSchedule?: string
  ): DeleteRequestBuilder<SubBillCpiTables<T>, T> {
    return new DeleteRequestBuilder<SubBillCpiTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillCpiTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CPISchedule: cpiSchedule!
          }
    );
  }
}
