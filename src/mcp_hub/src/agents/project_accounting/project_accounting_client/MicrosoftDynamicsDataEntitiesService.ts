// @ts-nocheck
import type { ODataValueResponseV4 } from "@odata2ts/odata-core";
import type {
  ODataHttpClient,
  ODataHttpClientConfig,
  HttpResponseModel,
} from "@odata2ts/http-client-api";
import {
  ODataService,
  EntityTypeServiceV4,
  ODataServiceOptionsInternal,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import type {
  ValidationProjectTaskStatusId,
  ProjectReportSortFieldsId,
  ProjectAllocationKeyDetailsId,
  ProjectItemJournalTransId,
  ProjectParameterV2Id,
  ProjInvoiceWId,
  ProjForecastSalesImportId,
  ProjectJournalApprovalDetailsId,
  ProjectCollaborationWorkspaceSettingsId,
  ProjEstimateHoursImportId,
  ValidationProjectTaskStatus,
  EditableValidationProjectTaskStatus,
  ValidationProjectTaskStatus_DataValidationProjectTaskStatusEntityProjectNameParams,
  ProjectReportSortFields,
  EditableProjectReportSortFields,
  ProjectAllocationKeyDetails,
  EditableProjectAllocationKeyDetails,
  ProjectItemJournalTrans,
  EditableProjectItemJournalTrans,
  ProjectParameterV2,
  EditableProjectParameterV2,
  ProjInvoiceW,
  EditableProjInvoiceW,
  ProjForecastSalesImport,
  EditableProjForecastSalesImport,
  ProjectJournalApprovalDetails,
  EditableProjectJournalApprovalDetails,
  ProjectCollaborationWorkspaceSettings,
  EditableProjectCollaborationWorkspaceSettings,
  ProjEstimateHoursImport,
  EditableProjEstimateHoursImport,
} from "./MicrosoftDynamicsDataEntitiesModel";
import type {
  QValidationProjectTaskStatus,
  QProjectReportSortFields,
  QProjectAllocationKeyDetails,
  QProjectItemJournalTrans,
  QProjectParameterV2,
  QProjInvoiceW,
  QProjForecastSalesImport,
  QProjectJournalApprovalDetails,
  QProjectCollaborationWorkspaceSettings,
  QProjEstimateHoursImport,
} from "./QMicrosoftDynamicsDataEntities";
import {
  QValidationProjectTaskStatusId,
  QProjectReportSortFieldsId,
  QProjectAllocationKeyDetailsId,
  QProjectItemJournalTransId,
  QProjectParameterV2Id,
  QProjInvoiceWId,
  QProjForecastSalesImportId,
  QProjectJournalApprovalDetailsId,
  QProjectCollaborationWorkspaceSettingsId,
  QProjEstimateHoursImportId,
  qValidationProjectTaskStatus,
  ValidationProjectTaskStatus_QDataValidationProjectTaskStatusEntityProjectName,
  qProjectReportSortFields,
  qProjectAllocationKeyDetails,
  qProjectItemJournalTrans,
  qProjectParameterV2,
  qProjInvoiceW,
  qProjForecastSalesImport,
  qProjectJournalApprovalDetails,
  qProjectCollaborationWorkspaceSettings,
  qProjEstimateHoursImport,
} from "./QMicrosoftDynamicsDataEntities";

export class MicrosoftDynamicsDataEntitiesService<
  in out ClientType extends ODataHttpClient,
> extends ODataService<ClientType> {
  public validationProjectTaskStatus(): ValidationProjectTaskStatusCollectionService<ClientType>;
  public validationProjectTaskStatus(
    id: ValidationProjectTaskStatusId,
  ): ValidationProjectTaskStatusService<ClientType>;
  public validationProjectTaskStatus(
    id?: ValidationProjectTaskStatusId | undefined,
  ) {
    const fieldName = "ValidationProjectTaskStatus";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ValidationProjectTaskStatusCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new ValidationProjectTaskStatusService(
          client,
          path,
          new QValidationProjectTaskStatusId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public projectReportSortFields(): ProjectReportSortFieldsCollectionService<ClientType>;
  public projectReportSortFields(
    id: ProjectReportSortFieldsId,
  ): ProjectReportSortFieldsService<ClientType>;
  public projectReportSortFields(id?: ProjectReportSortFieldsId | undefined) {
    const fieldName = "ProjectReportSortFields";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ProjectReportSortFieldsCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new ProjectReportSortFieldsService(
          client,
          path,
          new QProjectReportSortFieldsId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public projectAllocationKeyDetails(): ProjectAllocationKeyDetailsCollectionService<ClientType>;
  public projectAllocationKeyDetails(
    id: ProjectAllocationKeyDetailsId,
  ): ProjectAllocationKeyDetailsService<ClientType>;
  public projectAllocationKeyDetails(
    id?: ProjectAllocationKeyDetailsId | undefined,
  ) {
    const fieldName = "ProjectAllocationKeyDetails";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ProjectAllocationKeyDetailsCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new ProjectAllocationKeyDetailsService(
          client,
          path,
          new QProjectAllocationKeyDetailsId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public projectItemJournalTrans(): ProjectItemJournalTransCollectionService<ClientType>;
  public projectItemJournalTrans(
    id: ProjectItemJournalTransId,
  ): ProjectItemJournalTransService<ClientType>;
  public projectItemJournalTrans(id?: ProjectItemJournalTransId | undefined) {
    const fieldName = "ProjectItemJournalTrans";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ProjectItemJournalTransCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new ProjectItemJournalTransService(
          client,
          path,
          new QProjectItemJournalTransId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public projectParameterV2(): ProjectParameterV2CollectionService<ClientType>;
  public projectParameterV2(
    id: ProjectParameterV2Id,
  ): ProjectParameterV2Service<ClientType>;
  public projectParameterV2(id?: ProjectParameterV2Id | undefined) {
    const fieldName = "ProjectParameterV2";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ProjectParameterV2CollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new ProjectParameterV2Service(
          client,
          path,
          new QProjectParameterV2Id(fieldName).buildUrl(id, isUrlNotEncoded()),
          options,
        );
  }

  public projInvoiceW(): ProjInvoiceWCollectionService<ClientType>;
  public projInvoiceW(id: ProjInvoiceWId): ProjInvoiceWService<ClientType>;
  public projInvoiceW(id?: ProjInvoiceWId | undefined) {
    const fieldName = "ProjInvoice_W";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ProjInvoiceWCollectionService(client, path, fieldName, options)
      : new ProjInvoiceWService(
          client,
          path,
          new QProjInvoiceWId(fieldName).buildUrl(id, isUrlNotEncoded()),
          options,
        );
  }

  public projForecastSalesImport(): ProjForecastSalesImportCollectionService<ClientType>;
  public projForecastSalesImport(
    id: ProjForecastSalesImportId,
  ): ProjForecastSalesImportService<ClientType>;
  public projForecastSalesImport(id?: ProjForecastSalesImportId | undefined) {
    const fieldName = "ProjForecastSalesImport";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ProjForecastSalesImportCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new ProjForecastSalesImportService(
          client,
          path,
          new QProjForecastSalesImportId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public projectJournalApprovalDetails(): ProjectJournalApprovalDetailsCollectionService<ClientType>;
  public projectJournalApprovalDetails(
    id: ProjectJournalApprovalDetailsId,
  ): ProjectJournalApprovalDetailsService<ClientType>;
  public projectJournalApprovalDetails(
    id?: ProjectJournalApprovalDetailsId | undefined,
  ) {
    const fieldName = "ProjectJournalApprovalDetails";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ProjectJournalApprovalDetailsCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new ProjectJournalApprovalDetailsService(
          client,
          path,
          new QProjectJournalApprovalDetailsId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public projectCollaborationWorkspaceSettings(): ProjectCollaborationWorkspaceSettingsCollectionService<ClientType>;
  public projectCollaborationWorkspaceSettings(
    id: ProjectCollaborationWorkspaceSettingsId,
  ): ProjectCollaborationWorkspaceSettingsService<ClientType>;
  public projectCollaborationWorkspaceSettings(
    id?: ProjectCollaborationWorkspaceSettingsId | undefined,
  ) {
    const fieldName = "ProjectCollaborationWorkspaceSettings";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ProjectCollaborationWorkspaceSettingsCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new ProjectCollaborationWorkspaceSettingsService(
          client,
          path,
          new QProjectCollaborationWorkspaceSettingsId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public projEstimateHoursImport(): ProjEstimateHoursImportCollectionService<ClientType>;
  public projEstimateHoursImport(
    id: ProjEstimateHoursImportId,
  ): ProjEstimateHoursImportService<ClientType>;
  public projEstimateHoursImport(id?: ProjEstimateHoursImportId | undefined) {
    const fieldName = "ProjEstimateHoursImport";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ProjEstimateHoursImportCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new ProjEstimateHoursImportService(
          client,
          path,
          new QProjEstimateHoursImportId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }
}

export class ValidationProjectTaskStatusService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  ValidationProjectTaskStatus,
  EditableValidationProjectTaskStatus,
  QValidationProjectTaskStatus
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qValidationProjectTaskStatus, options);
  }
}

export class ValidationProjectTaskStatusCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  ValidationProjectTaskStatus,
  EditableValidationProjectTaskStatus,
  QValidationProjectTaskStatus,
  ValidationProjectTaskStatusId
> {
  private _validationProjectTaskStatusQDataValidationProjectTaskStatusEntityProjectName?: ValidationProjectTaskStatus_QDataValidationProjectTaskStatusEntityProjectName;

  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qValidationProjectTaskStatus,
      new QValidationProjectTaskStatusId(name),
      options,
    );
  }

  public async dataValidationProjectTaskStatusEntityProjectName(
    params: ValidationProjectTaskStatus_DataValidationProjectTaskStatusEntityProjectNameParams,
    requestConfig?: ODataHttpClientConfig<ClientType>,
  ): Promise<HttpResponseModel<ODataValueResponseV4<string>>> {
    if (
      !this
        ._validationProjectTaskStatusQDataValidationProjectTaskStatusEntityProjectName
    ) {
      this._validationProjectTaskStatusQDataValidationProjectTaskStatusEntityProjectName =
        new ValidationProjectTaskStatus_QDataValidationProjectTaskStatusEntityProjectName();
    }

    const { addFullPath, client, getDefaultHeaders, isUrlNotEncoded } =
      this.__base;
    const url = addFullPath(
      this._validationProjectTaskStatusQDataValidationProjectTaskStatusEntityProjectName.buildUrl(),
    );
    const response = await client.post(
      url,
      this._validationProjectTaskStatusQDataValidationProjectTaskStatusEntityProjectName.convertUserParams(
        params,
      ),
      requestConfig,
      getDefaultHeaders(),
    );
    return this._validationProjectTaskStatusQDataValidationProjectTaskStatusEntityProjectName.convertResponse(
      response,
    );
  }
}

export class ProjectReportSortFieldsService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  ProjectReportSortFields,
  EditableProjectReportSortFields,
  QProjectReportSortFields
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qProjectReportSortFields, options);
  }
}

export class ProjectReportSortFieldsCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  ProjectReportSortFields,
  EditableProjectReportSortFields,
  QProjectReportSortFields,
  ProjectReportSortFieldsId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qProjectReportSortFields,
      new QProjectReportSortFieldsId(name),
      options,
    );
  }
}

export class ProjectAllocationKeyDetailsService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  ProjectAllocationKeyDetails,
  EditableProjectAllocationKeyDetails,
  QProjectAllocationKeyDetails
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qProjectAllocationKeyDetails, options);
  }
}

export class ProjectAllocationKeyDetailsCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  ProjectAllocationKeyDetails,
  EditableProjectAllocationKeyDetails,
  QProjectAllocationKeyDetails,
  ProjectAllocationKeyDetailsId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qProjectAllocationKeyDetails,
      new QProjectAllocationKeyDetailsId(name),
      options,
    );
  }
}

export class ProjectItemJournalTransService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  ProjectItemJournalTrans,
  EditableProjectItemJournalTrans,
  QProjectItemJournalTrans
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qProjectItemJournalTrans, options);
  }
}

export class ProjectItemJournalTransCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  ProjectItemJournalTrans,
  EditableProjectItemJournalTrans,
  QProjectItemJournalTrans,
  ProjectItemJournalTransId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qProjectItemJournalTrans,
      new QProjectItemJournalTransId(name),
      options,
    );
  }
}

export class ProjectParameterV2Service<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  ProjectParameterV2,
  EditableProjectParameterV2,
  QProjectParameterV2
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qProjectParameterV2, options);
  }
}

export class ProjectParameterV2CollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  ProjectParameterV2,
  EditableProjectParameterV2,
  QProjectParameterV2,
  ProjectParameterV2Id
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qProjectParameterV2,
      new QProjectParameterV2Id(name),
      options,
    );
  }
}

export class ProjInvoiceWService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  ProjInvoiceW,
  EditableProjInvoiceW,
  QProjInvoiceW
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qProjInvoiceW, options);
  }
}

export class ProjInvoiceWCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  ProjInvoiceW,
  EditableProjInvoiceW,
  QProjInvoiceW,
  ProjInvoiceWId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qProjInvoiceW,
      new QProjInvoiceWId(name),
      options,
    );
  }
}

export class ProjForecastSalesImportService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  ProjForecastSalesImport,
  EditableProjForecastSalesImport,
  QProjForecastSalesImport
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qProjForecastSalesImport, options);
  }
}

export class ProjForecastSalesImportCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  ProjForecastSalesImport,
  EditableProjForecastSalesImport,
  QProjForecastSalesImport,
  ProjForecastSalesImportId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qProjForecastSalesImport,
      new QProjForecastSalesImportId(name),
      options,
    );
  }
}

export class ProjectJournalApprovalDetailsService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  ProjectJournalApprovalDetails,
  EditableProjectJournalApprovalDetails,
  QProjectJournalApprovalDetails
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qProjectJournalApprovalDetails, options);
  }
}

export class ProjectJournalApprovalDetailsCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  ProjectJournalApprovalDetails,
  EditableProjectJournalApprovalDetails,
  QProjectJournalApprovalDetails,
  ProjectJournalApprovalDetailsId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qProjectJournalApprovalDetails,
      new QProjectJournalApprovalDetailsId(name),
      options,
    );
  }
}

export class ProjectCollaborationWorkspaceSettingsService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  ProjectCollaborationWorkspaceSettings,
  EditableProjectCollaborationWorkspaceSettings,
  QProjectCollaborationWorkspaceSettings
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qProjectCollaborationWorkspaceSettings,
      options,
    );
  }
}

export class ProjectCollaborationWorkspaceSettingsCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  ProjectCollaborationWorkspaceSettings,
  EditableProjectCollaborationWorkspaceSettings,
  QProjectCollaborationWorkspaceSettings,
  ProjectCollaborationWorkspaceSettingsId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qProjectCollaborationWorkspaceSettings,
      new QProjectCollaborationWorkspaceSettingsId(name),
      options,
    );
  }
}

export class ProjEstimateHoursImportService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  ProjEstimateHoursImport,
  EditableProjEstimateHoursImport,
  QProjEstimateHoursImport
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qProjEstimateHoursImport, options);
  }
}

export class ProjEstimateHoursImportCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  ProjEstimateHoursImport,
  EditableProjEstimateHoursImport,
  QProjEstimateHoursImport,
  ProjEstimateHoursImportId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qProjEstimateHoursImport,
      new QProjEstimateHoursImportId(name),
      options,
    );
  }
}
