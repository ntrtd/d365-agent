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
import { SubBillMassTerminationTables } from './SubBillMassTerminationTables';

/**
 * Request builder class for operations supported on the {@link SubBillMassTerminationTables} entity.
 */
export class SubBillMassTerminationTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillMassTerminationTables<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillMassTerminationTables` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillMassTerminationTables` entities.
   */
  getAll(): GetAllRequestBuilder<SubBillMassTerminationTables<T>, T> {
    return new GetAllRequestBuilder<SubBillMassTerminationTables<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SubBillMassTerminationTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillMassTerminationTables`.
   */
  create(
    entity: SubBillMassTerminationTables<T>
  ): CreateRequestBuilder<SubBillMassTerminationTables<T>, T> {
    return new CreateRequestBuilder<SubBillMassTerminationTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SubBillMassTerminationTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillMassTerminationTables.dataAreaId}.
   * @param terminationProcessId Key property. See {@link SubBillMassTerminationTables.terminationProcessId}.
   * @returns A request builder for creating requests to retrieve one `SubBillMassTerminationTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    terminationProcessId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SubBillMassTerminationTables<T>, T> {
    return new GetByKeyRequestBuilder<SubBillMassTerminationTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TerminationProcessId: terminationProcessId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillMassTerminationTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillMassTerminationTables`.
   */
  update(
    entity: SubBillMassTerminationTables<T>
  ): UpdateRequestBuilder<SubBillMassTerminationTables<T>, T> {
    return new UpdateRequestBuilder<SubBillMassTerminationTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillMassTerminationTables`.
   * @param dataAreaId Key property. See {@link SubBillMassTerminationTables.dataAreaId}.
   * @param terminationProcessId Key property. See {@link SubBillMassTerminationTables.terminationProcessId}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillMassTerminationTables`.
   */
  delete(
    dataAreaId: string,
    terminationProcessId: string
  ): DeleteRequestBuilder<SubBillMassTerminationTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillMassTerminationTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillMassTerminationTables` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillMassTerminationTables<T>
  ): DeleteRequestBuilder<SubBillMassTerminationTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    terminationProcessId?: string
  ): DeleteRequestBuilder<SubBillMassTerminationTables<T>, T> {
    return new DeleteRequestBuilder<SubBillMassTerminationTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillMassTerminationTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TerminationProcessId: terminationProcessId!
          }
    );
  }
}
