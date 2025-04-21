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
import { SurveyCompanies } from './SurveyCompanies';

/**
 * Request builder class for operations supported on the {@link SurveyCompanies} entity.
 */
export class SurveyCompaniesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SurveyCompanies<T>, T> {
  /**
   * Returns a request builder for querying all `SurveyCompanies` entities.
   * @returns A request builder for creating requests to retrieve all `SurveyCompanies` entities.
   */
  getAll(): GetAllRequestBuilder<SurveyCompanies<T>, T> {
    return new GetAllRequestBuilder<SurveyCompanies<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SurveyCompanies` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SurveyCompanies`.
   */
  create(
    entity: SurveyCompanies<T>
  ): CreateRequestBuilder<SurveyCompanies<T>, T> {
    return new CreateRequestBuilder<SurveyCompanies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SurveyCompanies` entity based on its keys.
   * @param surveyCompanyId Key property. See {@link SurveyCompanies.surveyCompanyId}.
   * @returns A request builder for creating requests to retrieve one `SurveyCompanies` entity based on its keys.
   */
  getByKey(
    surveyCompanyId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SurveyCompanies<T>, T> {
    return new GetByKeyRequestBuilder<SurveyCompanies<T>, T>(this.entityApi, {
      SurveyCompanyId: surveyCompanyId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SurveyCompanies`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SurveyCompanies`.
   */
  update(
    entity: SurveyCompanies<T>
  ): UpdateRequestBuilder<SurveyCompanies<T>, T> {
    return new UpdateRequestBuilder<SurveyCompanies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SurveyCompanies`.
   * @param surveyCompanyId Key property. See {@link SurveyCompanies.surveyCompanyId}.
   * @returns A request builder for creating requests that delete an entity of type `SurveyCompanies`.
   */
  delete(surveyCompanyId: string): DeleteRequestBuilder<SurveyCompanies<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SurveyCompanies`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SurveyCompanies` by taking the entity as a parameter.
   */
  delete(
    entity: SurveyCompanies<T>
  ): DeleteRequestBuilder<SurveyCompanies<T>, T>;
  delete(
    surveyCompanyIdOrEntity: any
  ): DeleteRequestBuilder<SurveyCompanies<T>, T> {
    return new DeleteRequestBuilder<SurveyCompanies<T>, T>(
      this.entityApi,
      surveyCompanyIdOrEntity instanceof SurveyCompanies
        ? surveyCompanyIdOrEntity
        : { SurveyCompanyId: surveyCompanyIdOrEntity! }
    );
  }
}
