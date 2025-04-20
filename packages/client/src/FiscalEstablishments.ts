/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { FiscalEstablishmentsApi } from './FiscalEstablishmentsApi';
import { NoYes } from './NoYes';
import { EfDocEnvironmentBr } from './EfDocEnvironmentBr';
import { SpedContribReportingTypeBr } from './SpedContribReportingTypeBr';
import { EFiscalDocVersionBr } from './EFiscalDocVersionBr';
import { EfDocNFeTechNotesBr } from './EfDocNFeTechNotesBr';
import {
  FiscalEstablishmentIePerStates,
  FiscalEstablishmentIePerStatesType
} from './FiscalEstablishmentIePerStates';
import {
  OperationalSitesV2,
  OperationalSitesV2Type
} from './OperationalSitesV2';
import { OperationalSites, OperationalSitesType } from './OperationalSites';

/**
 * This class represents the entity "FiscalEstablishments" of service "d365_metadata".
 */
export class FiscalEstablishments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FiscalEstablishmentsType<T>
{
  /**
   * Technical entity name for FiscalEstablishments.
   */
  static override _entityName = 'FiscalEstablishments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FiscalEstablishments entity.
   */
  static _keys = ['dataAreaId', 'FiscalEstablishmentId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fiscal Establishment Id.
   */
  declare fiscalEstablishmentId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Preprinted Security Form.
   * @nullable
   */
  declare preprintedSecurityForm?: NoYes | null;
  /**
   * Email Template Approved N Fe.
   * @nullable
   */
  declare emailTemplateApprovedNFe?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Match Nfe Xml On Posting.
   * @nullable
   */
  declare matchNfeXmlOnPosting?: NoYes | null;
  /**
   * Csc Token.
   * @nullable
   */
  declare cscToken?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Next Fiscal Printer Daily Report Number.
   */
  declare nextFiscalPrinterDailyReportNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Party Number.
   * @nullable
   */
  declare partyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Block Posting Not Validated Nfe Xml.
   * @nullable
   */
  declare blockPostingNotValidatedNfeXml?: NoYes | null;
  /**
   * Print Danfe When Aproved.
   */
  declare printDanfeWhenAproved: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Send Danfe Pdf In Email.
   * @nullable
   */
  declare sendDanfePdfInEmail?: NoYes | null;
  /**
   * N Fe Environment.
   * @nullable
   */
  declare nFeEnvironment?: EfDocEnvironmentBr | null;
  /**
   * Fiscal Establishment Group Id.
   * @nullable
   */
  declare fiscalEstablishmentGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Nf Ce Environment.
   * @nullable
   */
  declare nfCeEnvironment?: EfDocEnvironmentBr | null;
  /**
   * Email Template Correction Letter N Fe.
   * @nullable
   */
  declare emailTemplateCorrectionLetterNFe?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Validate Xml Schema.
   */
  declare validateXmlSchema: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Closed Warehouse.
   * @nullable
   */
  declare closedWarehouse?: NoYes | null;
  /**
   * Nf Ce Send Pdf In Email.
   * @nullable
   */
  declare nfCeSendPdfInEmail?: NoYes | null;
  /**
   * Csc.
   * @nullable
   */
  declare csc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cnpj.
   * @nullable
   */
  declare cnpj?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sped Contrib Reporting Type.
   * @nullable
   */
  declare spedContribReportingType?: SpedContribReportingTypeBr | null;
  /**
   * Ccm.
   * @nullable
   */
  declare ccm?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fci To Intrastate Enabled.
   * @nullable
   */
  declare fciToIntrastateEnabled?: NoYes | null;
  /**
   * Email Template Canceled N Fe.
   * @nullable
   */
  declare emailTemplateCanceledNFe?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * N Fe Digital Certificate.
   * @nullable
   */
  declare nFeDigitalCertificate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Nf Ce Authority.
   * @nullable
   */
  declare nfCeAuthority?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * N Fe Authority.
   * @nullable
   */
  declare nFeAuthority?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * N Fe Version.
   * @nullable
   */
  declare nFeVersion?: EFiscalDocVersionBr | null;
  /**
   * Ef Doc N Fe Tech Notes.
   * @nullable
   */
  declare efDocNFeTechNotes?: EfDocNFeTechNotesBr | null;
  /**
   * Accountant Crc.
   * @nullable
   */
  declare accountantCrc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ie.
   * @nullable
   */
  declare ie?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Establishment Sales Issuer Id.
   * @nullable
   */
  declare fiscalEstablishmentSalesIssuerId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Nire.
   * @nullable
   */
  declare nire?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Nf Ce Version.
   * @nullable
   */
  declare nfCeVersion?: EFiscalDocVersionBr | null;
  /**
   * Nf Ce Email Approved.
   * @nullable
   */
  declare nfCeEmailApproved?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ef Doc N Fe 402018005 V 110.
   * @nullable
   */
  declare efDocNFe402018005V110?: NoYes | null;
  /**
   * Address Name.
   * @nullable
   */
  declare addressName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accountant Cpf.
   * @nullable
   */
  declare accountantCpf?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link FiscalEstablishmentIePerStates} entity.
   */
  declare fiscalEstablishmentIePerState: FiscalEstablishmentIePerStates<T>[];
  /**
   * One-to-many navigation property to the {@link OperationalSitesV2} entity.
   */
  declare operationalSiteV2: OperationalSitesV2<T>[];
  /**
   * One-to-many navigation property to the {@link OperationalSites} entity.
   */
  declare operationalSite: OperationalSites<T>[];

  constructor(_entityApi: FiscalEstablishmentsApi<T>) {
    super(_entityApi);
  }
}

export interface FiscalEstablishmentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  fiscalEstablishmentId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  preprintedSecurityForm?: NoYes | null;
  emailTemplateApprovedNFe?: DeserializedType<T, 'Edm.String'> | null;
  matchNfeXmlOnPosting?: NoYes | null;
  cscToken?: DeserializedType<T, 'Edm.String'> | null;
  nextFiscalPrinterDailyReportNumber: DeserializedType<T, 'Edm.Int32'>;
  partyNumber?: DeserializedType<T, 'Edm.String'> | null;
  blockPostingNotValidatedNfeXml?: NoYes | null;
  printDanfeWhenAproved: DeserializedType<T, 'Edm.Boolean'>;
  sendDanfePdfInEmail?: NoYes | null;
  nFeEnvironment?: EfDocEnvironmentBr | null;
  fiscalEstablishmentGroupId?: DeserializedType<T, 'Edm.String'> | null;
  nfCeEnvironment?: EfDocEnvironmentBr | null;
  emailTemplateCorrectionLetterNFe?: DeserializedType<T, 'Edm.String'> | null;
  validateXmlSchema: DeserializedType<T, 'Edm.Boolean'>;
  closedWarehouse?: NoYes | null;
  nfCeSendPdfInEmail?: NoYes | null;
  csc?: DeserializedType<T, 'Edm.String'> | null;
  cnpj?: DeserializedType<T, 'Edm.String'> | null;
  spedContribReportingType?: SpedContribReportingTypeBr | null;
  ccm?: DeserializedType<T, 'Edm.String'> | null;
  fciToIntrastateEnabled?: NoYes | null;
  emailTemplateCanceledNFe?: DeserializedType<T, 'Edm.String'> | null;
  nFeDigitalCertificate?: DeserializedType<T, 'Edm.String'> | null;
  nfCeAuthority?: DeserializedType<T, 'Edm.String'> | null;
  nFeAuthority?: DeserializedType<T, 'Edm.String'> | null;
  nFeVersion?: EFiscalDocVersionBr | null;
  efDocNFeTechNotes?: EfDocNFeTechNotesBr | null;
  accountantCrc?: DeserializedType<T, 'Edm.String'> | null;
  ie?: DeserializedType<T, 'Edm.String'> | null;
  fiscalEstablishmentSalesIssuerId?: DeserializedType<T, 'Edm.String'> | null;
  nire?: DeserializedType<T, 'Edm.String'> | null;
  nfCeVersion?: EFiscalDocVersionBr | null;
  nfCeEmailApproved?: DeserializedType<T, 'Edm.String'> | null;
  efDocNFe402018005V110?: NoYes | null;
  addressName?: DeserializedType<T, 'Edm.String'> | null;
  accountantCpf?: DeserializedType<T, 'Edm.String'> | null;
  fiscalEstablishmentIePerState: FiscalEstablishmentIePerStatesType<T>[];
  operationalSiteV2: OperationalSitesV2Type<T>[];
  operationalSite: OperationalSitesType<T>[];
}
