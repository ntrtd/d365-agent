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
import { DocumentPostings } from './DocumentPostings';
import { TableGroupAll } from './TableGroupAll';

/**
 * Request builder class for operations supported on the {@link DocumentPostings} entity.
 */
export class DocumentPostingsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DocumentPostings<T>, T> {
  /**
   * Returns a request builder for querying all `DocumentPostings` entities.
   * @returns A request builder for creating requests to retrieve all `DocumentPostings` entities.
   */
  getAll(): GetAllRequestBuilder<DocumentPostings<T>, T> {
    return new GetAllRequestBuilder<DocumentPostings<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DocumentPostings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DocumentPostings`.
   */
  create(
    entity: DocumentPostings<T>
  ): CreateRequestBuilder<DocumentPostings<T>, T> {
    return new CreateRequestBuilder<DocumentPostings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DocumentPostings` entity based on its keys.
   * @param dataAreaId Key property. See {@link DocumentPostings.dataAreaId}.
   * @param accountCode Key property. See {@link DocumentPostings.accountCode}.
   * @param facilityGroup Key property. See {@link DocumentPostings.facilityGroup}.
   * @param facilityType Key property. See {@link DocumentPostings.facilityType}.
   * @returns A request builder for creating requests to retrieve one `DocumentPostings` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    accountCode: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TableGroupAll'
    >,
    facilityGroup: DeserializedType<T, 'Edm.String'>,
    facilityType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DocumentPostings<T>, T> {
    return new GetByKeyRequestBuilder<DocumentPostings<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      AccountCode: accountCode,
      FacilityGroup: facilityGroup,
      FacilityType: facilityType
    });
  }

  /**
   * Returns a request builder for updating an entity of type `DocumentPostings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DocumentPostings`.
   */
  update(
    entity: DocumentPostings<T>
  ): UpdateRequestBuilder<DocumentPostings<T>, T> {
    return new UpdateRequestBuilder<DocumentPostings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DocumentPostings`.
   * @param dataAreaId Key property. See {@link DocumentPostings.dataAreaId}.
   * @param accountCode Key property. See {@link DocumentPostings.accountCode}.
   * @param facilityGroup Key property. See {@link DocumentPostings.facilityGroup}.
   * @param facilityType Key property. See {@link DocumentPostings.facilityType}.
   * @returns A request builder for creating requests that delete an entity of type `DocumentPostings`.
   */
  delete(
    dataAreaId: string,
    accountCode: TableGroupAll,
    facilityGroup: string,
    facilityType: string
  ): DeleteRequestBuilder<DocumentPostings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DocumentPostings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DocumentPostings` by taking the entity as a parameter.
   */
  delete(
    entity: DocumentPostings<T>
  ): DeleteRequestBuilder<DocumentPostings<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    accountCode?: TableGroupAll,
    facilityGroup?: string,
    facilityType?: string
  ): DeleteRequestBuilder<DocumentPostings<T>, T> {
    return new DeleteRequestBuilder<DocumentPostings<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DocumentPostings
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AccountCode: accountCode!,
            FacilityGroup: facilityGroup!,
            FacilityType: facilityType!
          }
    );
  }
}
