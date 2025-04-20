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
import { VendorFiscalDocTextReferencedProcesses } from './VendorFiscalDocTextReferencedProcesses';
import { AgencyBr } from './AgencyBr';

/**
 * Request builder class for operations supported on the {@link VendorFiscalDocTextReferencedProcesses} entity.
 */
export class VendorFiscalDocTextReferencedProcessesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendorFiscalDocTextReferencedProcesses<T>, T> {
  /**
   * Returns a request builder for querying all `VendorFiscalDocTextReferencedProcesses` entities.
   * @returns A request builder for creating requests to retrieve all `VendorFiscalDocTextReferencedProcesses` entities.
   */
  getAll(): GetAllRequestBuilder<VendorFiscalDocTextReferencedProcesses<T>, T> {
    return new GetAllRequestBuilder<
      VendorFiscalDocTextReferencedProcesses<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `VendorFiscalDocTextReferencedProcesses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendorFiscalDocTextReferencedProcesses`.
   */
  create(
    entity: VendorFiscalDocTextReferencedProcesses<T>
  ): CreateRequestBuilder<VendorFiscalDocTextReferencedProcesses<T>, T> {
    return new CreateRequestBuilder<
      VendorFiscalDocTextReferencedProcesses<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `VendorFiscalDocTextReferencedProcesses` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendorFiscalDocTextReferencedProcesses.dataAreaId}.
   * @param vendor Key property. See {@link VendorFiscalDocTextReferencedProcesses.vendor}.
   * @param fiscalDocumentText Key property. See {@link VendorFiscalDocTextReferencedProcesses.fiscalDocumentText}.
   * @param agency Key property. See {@link VendorFiscalDocTextReferencedProcesses.agency}.
   * @param processNumber Key property. See {@link VendorFiscalDocTextReferencedProcesses.processNumber}.
   * @returns A request builder for creating requests to retrieve one `VendorFiscalDocTextReferencedProcesses` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    vendor: DeserializedType<T, 'Edm.String'>,
    fiscalDocumentText: DeserializedType<T, 'Edm.String'>,
    agency: DeserializedType<T, 'Microsoft.Dynamics.DataEntities.Agency_BR'>,
    processNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendorFiscalDocTextReferencedProcesses<T>, T> {
    return new GetByKeyRequestBuilder<
      VendorFiscalDocTextReferencedProcesses<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      Vendor: vendor,
      FiscalDocumentText: fiscalDocumentText,
      Agency: agency,
      ProcessNumber: processNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `VendorFiscalDocTextReferencedProcesses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendorFiscalDocTextReferencedProcesses`.
   */
  update(
    entity: VendorFiscalDocTextReferencedProcesses<T>
  ): UpdateRequestBuilder<VendorFiscalDocTextReferencedProcesses<T>, T> {
    return new UpdateRequestBuilder<
      VendorFiscalDocTextReferencedProcesses<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `VendorFiscalDocTextReferencedProcesses`.
   * @param dataAreaId Key property. See {@link VendorFiscalDocTextReferencedProcesses.dataAreaId}.
   * @param vendor Key property. See {@link VendorFiscalDocTextReferencedProcesses.vendor}.
   * @param fiscalDocumentText Key property. See {@link VendorFiscalDocTextReferencedProcesses.fiscalDocumentText}.
   * @param agency Key property. See {@link VendorFiscalDocTextReferencedProcesses.agency}.
   * @param processNumber Key property. See {@link VendorFiscalDocTextReferencedProcesses.processNumber}.
   * @returns A request builder for creating requests that delete an entity of type `VendorFiscalDocTextReferencedProcesses`.
   */
  delete(
    dataAreaId: string,
    vendor: string,
    fiscalDocumentText: string,
    agency: AgencyBr,
    processNumber: string
  ): DeleteRequestBuilder<VendorFiscalDocTextReferencedProcesses<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendorFiscalDocTextReferencedProcesses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendorFiscalDocTextReferencedProcesses` by taking the entity as a parameter.
   */
  delete(
    entity: VendorFiscalDocTextReferencedProcesses<T>
  ): DeleteRequestBuilder<VendorFiscalDocTextReferencedProcesses<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    vendor?: string,
    fiscalDocumentText?: string,
    agency?: AgencyBr,
    processNumber?: string
  ): DeleteRequestBuilder<VendorFiscalDocTextReferencedProcesses<T>, T> {
    return new DeleteRequestBuilder<
      VendorFiscalDocTextReferencedProcesses<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendorFiscalDocTextReferencedProcesses
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Vendor: vendor!,
            FiscalDocumentText: fiscalDocumentText!,
            Agency: agency!,
            ProcessNumber: processNumber!
          }
    );
  }
}
