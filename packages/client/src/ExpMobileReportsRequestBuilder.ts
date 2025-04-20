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
import { ExpMobileReports } from './ExpMobileReports';

/**
 * Request builder class for operations supported on the {@link ExpMobileReports} entity.
 */
export class ExpMobileReportsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExpMobileReports<T>, T> {
  /**
   * Returns a request builder for querying all `ExpMobileReports` entities.
   * @returns A request builder for creating requests to retrieve all `ExpMobileReports` entities.
   */
  getAll(): GetAllRequestBuilder<ExpMobileReports<T>, T> {
    return new GetAllRequestBuilder<ExpMobileReports<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ExpMobileReports` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExpMobileReports`.
   */
  create(
    entity: ExpMobileReports<T>
  ): CreateRequestBuilder<ExpMobileReports<T>, T> {
    return new CreateRequestBuilder<ExpMobileReports<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExpMobileReports` entity based on its keys.
   * @param expNumber Key property. See {@link ExpMobileReports.expNumber}.
   * @param legalEntityDataArea Key property. See {@link ExpMobileReports.legalEntityDataArea}.
   * @returns A request builder for creating requests to retrieve one `ExpMobileReports` entity based on its keys.
   */
  getByKey(
    expNumber: DeserializedType<T, 'Edm.String'>,
    legalEntityDataArea: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ExpMobileReports<T>, T> {
    return new GetByKeyRequestBuilder<ExpMobileReports<T>, T>(this.entityApi, {
      ExpNumber: expNumber,
      LegalEntity_DataArea: legalEntityDataArea
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ExpMobileReports`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExpMobileReports`.
   */
  update(
    entity: ExpMobileReports<T>
  ): UpdateRequestBuilder<ExpMobileReports<T>, T> {
    return new UpdateRequestBuilder<ExpMobileReports<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExpMobileReports`.
   * @param expNumber Key property. See {@link ExpMobileReports.expNumber}.
   * @param legalEntityDataArea Key property. See {@link ExpMobileReports.legalEntityDataArea}.
   * @returns A request builder for creating requests that delete an entity of type `ExpMobileReports`.
   */
  delete(
    expNumber: string,
    legalEntityDataArea: string
  ): DeleteRequestBuilder<ExpMobileReports<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExpMobileReports`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExpMobileReports` by taking the entity as a parameter.
   */
  delete(
    entity: ExpMobileReports<T>
  ): DeleteRequestBuilder<ExpMobileReports<T>, T>;
  delete(
    expNumberOrEntity: any,
    legalEntityDataArea?: string
  ): DeleteRequestBuilder<ExpMobileReports<T>, T> {
    return new DeleteRequestBuilder<ExpMobileReports<T>, T>(
      this.entityApi,
      expNumberOrEntity instanceof ExpMobileReports
        ? expNumberOrEntity
        : {
            ExpNumber: expNumberOrEntity!,
            LegalEntity_DataArea: legalEntityDataArea!
          }
    );
  }
}
